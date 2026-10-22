import { useEffect, useRef } from "react";

const COLORS = {
  background: "#000000",
  green: "#10F5C4",
  particle: "#FFFFFF",
} as const;

const TIMING = {
  intro: 100,
  assemble: 3600,
  holdName: 600,
  greenEG: 1800,
  capitalize: 1600,
  transform: 3000,
  holdFinal: 3000,
  disperse: 3600,
  outro: 100,
} as const;

const PHASE = {
  INTRO: 0,
  ASSEMBLE: 1,
  HOLD_NAME: 2,
  GREEN: 3,
  CAPITALIZE: 4,
  TRANSFORM: 5,
  HOLD_FINAL: 6,
  DISPERSE: 7,
  OUTRO: 8,
} as const;

const FONT_FAMILY = "'DM Sans', sans-serif";
const TITLE_WEIGHT = 600;
const SUBTITLE_WEIGHT = 600;

const NAME_FRAUD = "Fraud";
const NAME_EG_LOWER = "eg";
const NAME_EG_UPPER = "EG";
const NAME = NAME_FRAUD + NAME_EG_LOWER;

const FINAL_TEXT = "Exchange Guard";

const E_INDEX = 0;
const G_INDEX = FINAL_TEXT.indexOf(" ") + 1;

// 👇 PARÁMETROS DE POSICIÓN Y TAMAÑO DE LA ANIMACIÓN
const ANIMATION_Y_POSITION = 0.72; // 0.5 es el centro; 0.72 la ubica más abajo
const ANIMATION_SCALE = 0.62; // Escala general de la animación (0.62 = 62% del tamaño anterior)

// Configuración de la grilla de píxeles ajustada al nuevo tamaño más chico:
const PARTICLE_STEP = 2.8;
const MIN_PARTICLE_STEP = 1.8;
const REFERENCE_TITLE_SIZE = 110;
const MAX_SUBTITLE_STEP = 2.2;
const RADIUS_PER_STEP = 0.38;
const SAMPLE_SCALE_MAX_AREA = 2_500_000;
const SUBTITLE_TITLE_RATIO = 0.6;
const SUBTITLE_STEP_DIVISOR = 36;
const MAX_STAGGER = 0.35;

const MAX_DPR = 2.5;
const MOBILE_BREAKPOINT = 640;
const RESIZE_DEBOUNCE = 150;

const ALPHA_LEVELS = 8;
const SKIP_LEVEL = 255;
const BUCKET_COUNT = ALPHA_LEVELS * 2; // blanco + verde

const MAX_FRAME_DELTA = 100;
const TAU = Math.PI * 2;

type Point = {
  x: number;
  y: number;
  scale?: number;
};

type Particle = {
  start: Point;
  title: Point;
  titleUpper: Point;
  final: Point;
  exit: Point;
  radiusTitle: number;
  radiusTitleUpper: number;
  radiusFinal: number;
  phase: number;
  delay: number;
  greenAt: number;
  greenLetter: boolean;
  dissolves: boolean;
};

type TextLayout = {
  fraud: Point[];
  titleELower: Point[];
  titleGLower: Point[];
  titleEUpper: Point[];
  titleGUpper: Point[];
  finalText: Point[][];
};

const PHASE_DURATIONS: readonly number[] = [
  TIMING.intro,
  TIMING.assemble,
  TIMING.holdName,
  TIMING.greenEG,
  TIMING.capitalize,
  TIMING.transform,
  TIMING.holdFinal,
  TIMING.disperse,
  TIMING.outro,
];

const TOTAL_DURATION = PHASE_DURATIONS.reduce(
  (total, duration) => total + duration,
  0,
);

function clamp01(value: number): number {
  return Math.min(1, Math.max(0, value));
}

function easeOutCubic(value: number): number {
  return 1 - Math.pow(1 - value, 3);
}

function easeInOutCubic(value: number): number {
  return value < 0.5
    ? 4 * value * value * value
    : 1 - Math.pow(-2 * value + 2, 3) / 2;
}

function interpolate(
  start: number,
  end: number,
  progress: number,
): number {
  return start + (end - start) * progress;
}

function sampleText(width: number, height: number): TextLayout {
  const empty: TextLayout = {
    fraud: [],
    titleELower: [],
    titleGLower: [],
    titleEUpper: [],
    titleGUpper: [],
    finalText: [],
  };

  const scale = width * height > SAMPLE_SCALE_MAX_AREA ? 1 : 2;
  const offscreen = document.createElement("canvas");
  offscreen.width = Math.ceil(width * scale);
  offscreen.height = Math.ceil(height * scale);
  const offCtx = offscreen.getContext("2d", { willReadFrequently: true });

  if (!offCtx) return empty;

  offCtx.setTransform(scale, 0, 0, scale, 0, 0);
  offCtx.fillStyle = "#FFFFFF";
  offCtx.textAlign = "left";
  offCtx.textBaseline = "middle";

  const isMobile = width < MOBILE_BREAKPOINT;

  offCtx.font = `${TITLE_WEIGHT} 100px ${FONT_FAMILY}`;
  const widthRatio =
    Math.max(
      offCtx.measureText(NAME).width,
      offCtx.measureText(NAME_FRAUD + NAME_EG_UPPER).width,
    ) / 100 || 4.2;

  const baseTitleSize = isMobile
    ? Math.min((width * 0.78) / widthRatio, height * 0.19, REFERENCE_TITLE_SIZE)
    : Math.min(width * 0.115, height * 0.19, REFERENCE_TITLE_SIZE);

  const titleSize = baseTitleSize * ANIMATION_SCALE;

  offCtx.font = `${SUBTITLE_WEIGHT} 100px ${FONT_FAMILY}`;
  const subtitleRatio = offCtx.measureText(FINAL_TEXT).width / 100 || 7;

  const subtitleSize = Math.max(
    12,
    Math.min(
      titleSize * SUBTITLE_TITLE_RATIO,
      ((width * 0.9) / subtitleRatio) * ANIMATION_SCALE,
    ),
  );

  const titleStep = Math.min(
    PARTICLE_STEP,
    Math.max(
      MIN_PARTICLE_STEP,
      Math.round((PARTICLE_STEP * titleSize) / REFERENCE_TITLE_SIZE),
    ),
  );
  const subtitleStep = Math.min(
    MAX_SUBTITLE_STEP,
    Math.max(1.5, Math.round((subtitleSize / SUBTITLE_STEP_DIVISOR) * 2) / 2),
  );
  const radiusScaleFor = (step: number) => step * RADIUS_PER_STEP;

  const centerX = width / 2;
  const centerY = height * ANIMATION_Y_POSITION;

  const capture = (
    step: number,
    x0: number,
    y0: number,
    x1: number,
    y1: number,
  ): Point[] => {
    const left = Math.max(0, Math.floor(x0 * scale));
    const top = Math.max(0, Math.floor(y0 * scale));
    const right = Math.min(offscreen.width, Math.ceil(x1 * scale));
    const bottom = Math.min(offscreen.height, Math.ceil(y1 * scale));
    const regionWidth = right - left;
    const regionHeight = bottom - top;

    if (regionWidth <= 0 || regionHeight <= 0) return [];

    const image = offCtx.getImageData(left, top, regionWidth, regionHeight);
    const points: Point[] = [];
    const sampleStep = Math.max(1, Math.round(step * scale));
    const pointScale = radiusScaleFor(sampleStep / scale);

    const firstX = Math.ceil(left / sampleStep) * sampleStep;
    const firstY = Math.ceil(top / sampleStep) * sampleStep;

    for (let y = firstY; y < bottom; y += sampleStep) {
      for (let x = firstX; x < right; x += sampleStep) {
        const alpha = image.data[((y - top) * regionWidth + (x - left)) * 4 + 3];
        if (alpha > 110) {
          points.push({ x: x / scale, y: y / scale, scale: pointScale });
        }
      }
    }
    return points;
  };

  // 1. Título: "Fraud", "e"/"g" (minúsculas) y "E"/"G" (mayúsculas).
  offCtx.font = `${TITLE_WEIGHT} ${titleSize}px ${FONT_FAMILY}`;
  const startX = centerX - offCtx.measureText(NAME).width / 2;
  const fraudWidth = offCtx.measureText(NAME_FRAUD).width;
  const eLowerX = startX + fraudWidth;
  const gLowerX = eLowerX + offCtx.measureText(NAME_EG_LOWER[0]).width;

  const eUpperX = startX + fraudWidth;
  const gUpperX = eUpperX + offCtx.measureText(NAME_EG_UPPER[0]).width;

  const captureTitlePart = (text: string, x: number): Point[] => {
    const advance = offCtx.measureText(text).width;
    const padding = titleSize * 0.2;

    offCtx.clearRect(0, 0, width, height);
    offCtx.fillText(text, x, centerY);
    return capture(
      titleStep,
      x - padding,
      centerY - titleSize,
      x + advance + padding,
      centerY + titleSize,
    );
  };

  const fraud = captureTitlePart(NAME_FRAUD, startX);
  const titleELower = captureTitlePart(NAME_EG_LOWER[0], eLowerX);
  const titleGLower = captureTitlePart(NAME_EG_LOWER[1], gLowerX);
  const titleEUpper = captureTitlePart(NAME_EG_UPPER[0], eUpperX);
  const titleGUpper = captureTitlePart(NAME_EG_UPPER[1], gUpperX);

  // 2. Texto final: "Exchange Guard" centrado en la nueva posición Y.
  offCtx.font = `${SUBTITLE_WEIGHT} ${subtitleSize}px ${FONT_FAMILY}`;

  const lineStart = centerX - offCtx.measureText(FINAL_TEXT).width / 2;
  const slotPadding = subtitleSize * 0.2;

  const sampleChar = (char: string, x: number): Point[] => {
    const advance = offCtx.measureText(char).width;

    offCtx.clearRect(0, 0, width, height);
    offCtx.fillText(char, x, centerY);

    return capture(
      subtitleStep,
      x - slotPadding,
      centerY - subtitleSize,
      x + advance + slotPadding,
      centerY + subtitleSize,
    );
  };

  const slotX = (index: number) =>
    lineStart + offCtx.measureText(FINAL_TEXT.slice(0, index)).width;

  const finalText = [...FINAL_TEXT].map((char, index) =>
    char === " " ? [] : sampleChar(char, slotX(index)),
  );

  return {
    fraud,
    titleELower,
    titleGLower,
    titleEUpper,
    titleGUpper,
    finalText,
  };
}

function orderByColumns<T extends Point>(points: T[], columns: number): T[] {
  const sorted = [...points].sort((a, b) => a.x - b.x);
  const size = Math.max(1, Math.ceil(sorted.length / columns));
  const ordered: T[] = [];

  for (let index = 0; index < sorted.length; index += size) {
    const column = sorted
      .slice(index, index + size)
      .sort((a, b) => a.y - b.y);

    for (const point of column) {
      ordered.push(point);
    }
  }

  return ordered;
}

function pick<T>(list: T[], index: number, count: number): T {
  return list[Math.floor((index * list.length) / count)];
}

function columnsFor(count: number): number {
  return Math.max(1, Math.round(Math.sqrt(count)));
}

function createParticles(layout: TextLayout, width: number, height: number): Particle[] {
  const {
    fraud,
    titleELower,
    titleGLower,
    titleEUpper,
    titleGUpper,
    finalText,
  } = layout;

  const finalE = finalText[E_INDEX] ?? [];
  const finalG = finalText[G_INDEX] ?? [];

  if (
    fraud.length === 0 ||
    titleELower.length === 0 ||
    titleGLower.length === 0 ||
    titleEUpper.length === 0 ||
    titleGUpper.length === 0 ||
    finalE.length === 0 ||
    finalG.length === 0
  ) {
    return [];
  }

  const baseRadius = () => 1;
  const animCenterY = height * ANIMATION_Y_POSITION;

  const randomStart = (): Point => ({
    x: -Math.random() * width * 0.6,
    y: animCenterY + (Math.random() - 0.5) * height * 0.45,
  });
  const randomExit = (from: Point): Point => ({
    x: width + Math.random() * width * 0.5,
    y: from.y + (Math.random() - 0.5) * height * 0.4,
  });

  const buildGreenGroup = (
    lowerTitlePts: Point[],
    upperTitlePts: Point[],
    finalPts: Point[],
  ): Particle[] => {
    const count = Math.max(
      lowerTitlePts.length,
      upperTitlePts.length,
      finalPts.length,
    );
    const columns = columnsFor(count);
    const lowerOrdered = orderByColumns(lowerTitlePts, columns);
    const upperOrdered = orderByColumns(upperTitlePts, columns);
    const finalOrdered = orderByColumns(finalPts, columns);

    return Array.from({ length: count }, (_, index) => {
      const title = pick(lowerOrdered, index, count);
      const titleUpper = pick(upperOrdered, index, count);
      const finalPoint = pick(finalOrdered, index, count);
      const radius = baseRadius();

      return {
        start: randomStart(),
        title,
        titleUpper,
        final: finalPoint,
        exit: randomExit(finalPoint),
        radiusTitle: radius * (title.scale ?? 1),
        radiusTitleUpper: radius * (titleUpper.scale ?? 1),
        radiusFinal: radius * (finalPoint.scale ?? 1),
        phase: Math.random() * TAU,
        delay: Math.random() * MAX_STAGGER,
        greenAt: 0,
        greenLetter: true,
        dissolves: false,
      };
    });
  };

  const greenParticles = [
    ...buildGreenGroup(titleELower, titleEUpper, finalE),
    ...buildGreenGroup(titleGLower, titleGUpper, finalG),
  ];

  let minX = Infinity;
  let maxX = -Infinity;
  for (const particle of greenParticles) {
    minX = Math.min(minX, particle.title.x);
    maxX = Math.max(maxX, particle.title.x);
  }
  const spanX = Math.max(1, maxX - minX);
  for (const particle of greenParticles) {
    particle.greenAt =
      ((particle.title.x - minX) / spanX) * 0.8 + Math.random() * 0.15;
  }

  const targets: Point[] = [];

  finalText.forEach((charPoints, index) => {
    if (index === E_INDEX || index === G_INDEX || charPoints.length === 0) {
      return;
    }
    for (const pt of charPoints) {
      targets.push(pt);
    }
  });

  if (targets.length === 0) return [];

  const columns = columnsFor(Math.max(fraud.length, targets.length));
  const fraudOrdered = orderByColumns(fraud, columns);
  const targetsOrdered = orderByColumns(targets, columns);
  const used = new Uint8Array(fraudOrdered.length);

  const whiteParticles: Particle[] = targetsOrdered.map((target, index) => {
    const sourceIndex = Math.floor(
      (index * fraudOrdered.length) / targetsOrdered.length,
    );
    const source = fraudOrdered[sourceIndex];
    const radius = baseRadius();

    used[sourceIndex] = 1;

    return {
      start: randomStart(),
      title: source,
      titleUpper: source,
      final: target,
      exit: randomExit(target),
      radiusTitle: radius * (source.scale ?? 1),
      radiusTitleUpper: radius * (source.scale ?? 1),
      radiusFinal: radius * (target.scale ?? 1),
      phase: Math.random() * TAU,
      delay: Math.random() * MAX_STAGGER,
      greenAt: 0,
      greenLetter: false,
      dissolves: false,
    };
  });

  const dissolvingParticles: Particle[] = [];
  const driftRange = Math.min(width, height) * ANIMATION_SCALE;

  fraudOrdered.forEach((source, index) => {
    if (used[index]) return;

    const angle = Math.random() * TAU;
    const distance = (0.1 + Math.random() * 0.35) * driftRange;
    const drift: Point = {
      x: source.x + Math.cos(angle) * distance,
      y: source.y + Math.sin(angle) * distance,
    };
    const rTitle = baseRadius() * (source.scale ?? 1);

    dissolvingParticles.push({
      start: randomStart(),
      title: source,
      titleUpper: source,
      final: drift,
      exit: drift,
      radiusTitle: rTitle,
      radiusTitleUpper: rTitle,
      radiusFinal: 0,
      phase: Math.random() * TAU,
      delay: Math.random() * MAX_STAGGER,
      greenAt: 0,
      greenLetter: false,
      dissolves: true,
    });
  });

  return [...dissolvingParticles, ...whiteParticles, ...greenParticles];
}

export default function FraudEGBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d", {
      alpha: false,
    });

    if (!ctx) return;

    const motionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    let width = 0;
    let height = 0;
    let dpr = 1;
    let particles: Particle[] = [];
    let renderX = new Float32Array(0);
    let renderY = new Float32Array(0);
    let renderBucket = new Uint8Array(0);
    let bucketOrder = new Uint32Array(0);
    const bucketStart = new Uint32Array(BUCKET_COUNT + 1);
    let renderRadius = new Float32Array(0);

    let animationFrame = 0;
    let lastFrameTime = 0;
    let clock = 0;
    let reducedMotion = motionQuery.matches;
    let inView = true;
    let cancelled = false;
    let resizeTimer = 0;
    let resizeObserver: ResizeObserver | undefined;
    let intersectionObserver: IntersectionObserver | undefined;

    const drawStatic = () => {
      ctx.globalAlpha = 1;
      ctx.fillStyle = COLORS.background;
      ctx.fillRect(0, 0, width, height);

      for (const green of [false, true]) {
        ctx.fillStyle = green ? COLORS.green : COLORS.particle;
        ctx.beginPath();

        for (const particle of particles) {
          if (particle.greenLetter !== green || particle.radiusFinal < 0.1) continue;

          const half = particle.radiusFinal;
          const size = half * 2;
          ctx.rect(
            Math.round(particle.final.x - half),
            Math.round(particle.final.y - half),
            size,
            size,
          );
        }

        ctx.fill();
      }
    };

    const applySize = () => {
      const bounds = canvas.getBoundingClientRect();

      const nextWidth = Math.max(1, bounds.width);
      const nextHeight = Math.max(1, bounds.height);
      const nextDpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);

      if (
        Math.abs(nextWidth - width) < 1 &&
        Math.abs(nextHeight - height) < 1 &&
        nextDpr === dpr
      ) {
        return;
      }

      width = nextWidth;
      height = nextHeight;
      dpr = nextDpr;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = COLORS.background;
      ctx.fillRect(0, 0, width, height);

      particles = createParticles(sampleText(width, height), width, height);

      renderX = new Float32Array(particles.length);
      renderY = new Float32Array(particles.length);
      renderRadius = new Float32Array(particles.length);
      renderBucket = new Uint8Array(particles.length);
      bucketOrder = new Uint32Array(particles.length);

      if (reducedMotion) {
        drawStatic();
      }
    };

    const drawWaves = (
      time: number,
      phase: number,
      progress: number,
    ) => {
      let startX = 0;
      let endX = 0;

      if (phase === PHASE.ASSEMBLE) {
        startX = 0;
        endX = width * 0.56 * progress;
      } else if (phase === PHASE.TRANSFORM) {
        startX = width * (0.5 - 0.46 * progress);
        endX = width * (0.5 + 0.46 * progress);
      } else if (phase === PHASE.DISPERSE) {
        startX = width * 0.5;
        endX = width * (0.5 + 0.5 * progress);
      } else {
        return;
      }

      if (endX - startX < 2) return;

      const waveCenterY = height * ANIMATION_Y_POSITION;

      ctx.save();
      ctx.strokeStyle = COLORS.particle;
      ctx.lineWidth = 0.8;

      for (let wave = 0; wave < 5; wave++) {
        ctx.beginPath();

        for (let x = startX; x <= endX; x += 5) {
          const y =
            waveCenterY +
            (Math.sin(x * 0.018 + time * 0.0015 + wave) *
              (14 + wave * 5) +
              Math.sin(x * 0.008 - time * 0.001 + wave * 0.8) * 12) *
              ANIMATION_SCALE;

          if (x === startX) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.globalAlpha = 0.12 + (wave % 3) * 0.035;
        ctx.stroke();
      }

      ctx.restore();
    };

    const drawFrame = (time: number) => {
      ctx.globalAlpha = 1;
      ctx.fillStyle = COLORS.background;
      ctx.fillRect(0, 0, width, height);

      const elapsed = time % TOTAL_DURATION;

      let accumulated = 0;
      let phase = 0;
      let progress = 0;

      for (let index = 0; index < PHASE_DURATIONS.length; index++) {
        if (elapsed < accumulated + PHASE_DURATIONS[index]) {
          phase = index;
          progress = (elapsed - accumulated) / PHASE_DURATIONS[index];
          break;
        }

        accumulated += PHASE_DURATIONS[index];
      }

      if (phase === PHASE.INTRO || phase === PHASE.OUTRO) return;

      drawWaves(time, phase, progress);

      const eased =
        phase === PHASE.ASSEMBLE ? easeOutCubic(progress) : easeInOutCubic(progress);
      const phaseFade =
        phase === PHASE.DISPERSE ? 1 - easeOutCubic(progress) : 1;
      const waveAmplitude = 22 * ANIMATION_SCALE * (1 - progress);

      const count = particles.length;

      for (let i = 0; i < count; i++) {
        const particle = particles[i];

        let x = particle.title.x;
        let y = particle.title.y;
        let radius = particle.radiusTitle;
        let fade = phaseFade;
        let isGreen = 0;

        switch (phase) {
          case PHASE.ASSEMBLE:
            x = interpolate(particle.start.x, particle.title.x, eased);
            y = interpolate(particle.start.y, particle.title.y, eased);
            break;

          case PHASE.HOLD_NAME:
            break;

          case PHASE.GREEN:
            isGreen = particle.greenLetter && progress >= particle.greenAt ? 1 : 0;
            break;

          case PHASE.CAPITALIZE:
            x = interpolate(particle.title.x, particle.titleUpper.x, eased);
            y = interpolate(particle.title.y, particle.titleUpper.y, eased);
            radius = interpolate(
              particle.radiusTitle,
              particle.radiusTitleUpper,
              eased,
            );
            isGreen = particle.greenLetter ? 1 : 0;
            break;

          case PHASE.TRANSFORM: {
            const local = clamp01((progress - particle.delay) / (1 - MAX_STAGGER));
            const t = easeInOutCubic(local);

            x = interpolate(particle.titleUpper.x, particle.final.x, t);
            y = interpolate(particle.titleUpper.y, particle.final.y, t);
            radius = interpolate(
              particle.radiusTitleUpper,
              particle.radiusFinal,
              t,
            );
            isGreen = particle.greenLetter ? 1 : 0;

            if (particle.dissolves) fade = 1 - t;
            break;
          }

          case PHASE.HOLD_FINAL:
            x = particle.final.x;
            y = particle.final.y;
            radius = particle.radiusFinal;
            isGreen = particle.greenLetter ? 1 : 0;
            break;

          case PHASE.DISPERSE: {
            const wave =
              Math.sin(progress * Math.PI * 8 + particle.phase) * waveAmplitude;

            x = interpolate(particle.final.x, particle.exit.x, eased);
            y = interpolate(particle.final.y, particle.exit.y, eased) + wave;
            radius = particle.radiusFinal;
            isGreen = particle.greenLetter ? 1 : 0;
            break;
          }
        }

        const shimmer = 0.85 + 0.15 * Math.sin(time * 0.002 + particle.phase);
        const brightness = fade * shimmer;

        if (brightness < 0.02 || radius < 0.1) {
          renderBucket[i] = SKIP_LEVEL;
          continue;
        }

        renderX[i] = x;
        renderY[i] = y;
        renderRadius[i] = radius;
        const level = Math.min(
          ALPHA_LEVELS - 1,
          Math.floor(brightness * ALPHA_LEVELS),
        );
        renderBucket[i] = isGreen * ALPHA_LEVELS + level;
      }

      bucketStart.fill(0);

      for (let i = 0; i < count; i++) {
        const bucket = renderBucket[i];
        if (bucket !== SKIP_LEVEL) bucketStart[bucket + 1]++;
      }

      for (let bucket = 0; bucket < BUCKET_COUNT; bucket++) {
        bucketStart[bucket + 1] += bucketStart[bucket];
      }

      const cursor = bucketStart.slice(0, BUCKET_COUNT);

      for (let i = 0; i < count; i++) {
        const bucket = renderBucket[i];
        if (bucket !== SKIP_LEVEL) bucketOrder[cursor[bucket]++] = i;
      }

      for (let bucket = 0; bucket < BUCKET_COUNT; bucket++) {
        const from = bucketStart[bucket];
        const to = bucketStart[bucket + 1];

        if (from === to) continue;

        const isGreenGroup = bucket >= ALPHA_LEVELS;
        const level = bucket % ALPHA_LEVELS;

        ctx.fillStyle = isGreenGroup ? COLORS.green : COLORS.particle;
        ctx.globalAlpha = (level + 0.5) / ALPHA_LEVELS;
        ctx.beginPath();

        for (let k = from; k < to; k++) {
          const i = bucketOrder[k];
          const half = renderRadius[i];
          const size = half * 2;

          ctx.rect(renderX[i] - half, renderY[i] - half, size, size);
        }

        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const frame = (now: number) => {
      if (lastFrameTime === 0) lastFrameTime = now;

      clock += Math.min(now - lastFrameTime, MAX_FRAME_DELTA);
      lastFrameTime = now;

      drawFrame(clock);
      animationFrame = requestAnimationFrame(frame);
    };

    const stop = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = 0;
      lastFrameTime = 0;
    };

    const sync = () => {
      stop();

      if (width === 0) return;

      if (reducedMotion) {
        drawStatic();
        return;
      }

      if (inView && !document.hidden) {
        animationFrame = requestAnimationFrame(frame);
      }
    };

    const onMotionChange = (event: MediaQueryListEvent) => {
      reducedMotion = event.matches;
      sync();
    };

    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(applySize, RESIZE_DEBOUNCE);
    };

    const init = async () => {
      await document.fonts?.ready;

      try {
        await Promise.all([
          document.fonts?.load(`${TITLE_WEIGHT} 100px ${FONT_FAMILY}`),
          document.fonts?.load(`${SUBTITLE_WEIGHT} 34px ${FONT_FAMILY}`),
        ]);
      } catch (e) {
        console.warn("No se pudo forzar la carga, usando fallback", e);
      }

      if (cancelled) return;

      applySize();

      resizeObserver = new ResizeObserver(onResize);
      resizeObserver.observe(canvas);

      intersectionObserver = new IntersectionObserver(([entry]) => {
        inView = entry.isIntersecting;
        sync();
      });
      intersectionObserver.observe(canvas);

      motionQuery.addEventListener("change", onMotionChange);
      document.addEventListener("visibilitychange", sync);

      sync();
    };

    void init();

    return () => {
      cancelled = true;
      window.clearTimeout(resizeTimer);
      cancelAnimationFrame(animationFrame);
      resizeObserver?.disconnect();
      intersectionObserver?.disconnect();
      motionQuery.removeEventListener("change", onMotionChange);
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);

  return (
    <div
      className="relative w-full h-full min-h-[360px] bg-black overflow-hidden flex justify-center items-center font-sans box-border"
      role="img"
      aria-label="FraudEG. Exchange Guard."
    >
      <img
        src="/Fraudeg.svg"
        alt=""
        className="absolute top-[28%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[clamp(180px,32vw,380px)] h-auto z-[2] pointer-events-none select-none"
        aria-hidden="true"
      />
      <canvas
        ref={canvasRef}
        className="block w-full h-full pointer-events-none select-none z-[1]"
        aria-hidden="true"
      />
    </div>
  );
}