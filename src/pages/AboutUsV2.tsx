import { Navbar } from "../components/Designers-v2/Shared/Navbar";
import { Footer } from "../components/Designers-v2/Shared/Footer";
import { AccessibilityMenu } from "../components/Designers-v2/Shared/AccessibilityMenu";

export const AboutUsV2 = () => {
  return (
    <div className=" bg-[#050709] text-[#F9F9F9] flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow flex flex-col items-center w-full">
        <AccessibilityMenu />
      </main>
      <Footer />
    </div>
  );
};
