import React, { useRef, useEffect } from "react";
import VoiceInteractionPanel from "./VoiceInteractionPanel"; // Adjust path
import BeatVibrationPanel from "./BeatVibrationPanel"; // Adjust path

const DisabledPLPs: React.FC = () => {
  /*** Accessibility ***/
  const liveRegionRef = useRef<HTMLDivElement | null>(null);

  const speakToScreenReader = (message: string) => {
    if (liveRegionRef.current) {
      liveRegionRef.current.textContent = message;
      setTimeout(() => {
        if (liveRegionRef.current) liveRegionRef.current.textContent = "";
      }, 3000);
    }
  };

  useEffect(() => {
    speakToScreenReader(
      "Welcome to Beat Sense Studio. Use voice and beat panels."
    );
  }, []);

  return (
    <div className="w-full min-h-screen bg-tertiary p-4 flex justify-center py-12">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 w-full">
          {/* Voice Panel */}
          <div className="w-full lg:w-1/2">
            <VoiceInteractionPanel speakToScreenReader={speakToScreenReader} />
          </div>

          {/* Beat Panel */}
          <div className="w-full lg:w-1/2">
            <BeatVibrationPanel speakToScreenReader={speakToScreenReader} />
          </div>
        </div>
      </div>

      {/* ARIA Live Region for screen readers */}
      <div
        ref={liveRegionRef}
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
      />
    </div>
  );
};

export default DisabledPLPs;
