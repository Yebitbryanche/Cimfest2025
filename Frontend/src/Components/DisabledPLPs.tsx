import React, { useRef, useEffect } from "react";
import VoiceInteractionPanel from "./VoiceInteractionPanel"; // Assuming this path
import BeatVibrationPanel from "./BeatVibrationPanel"; // Assuming this path

const DisabledPLPs: React.FC = () => {
  /*** Accessibility ***/
  const liveRegionRef = useRef<HTMLDivElement | null>(null);
  const speakToScreenReader = (message: string) => {
    if (liveRegionRef.current) {
      liveRegionRef.current.textContent = message;
      // Clear content after a brief delay so the screen reader re-announces new messages
      setTimeout(() => {
        if (liveRegionRef.current) liveRegionRef.current.textContent = "";
      }, 3000);
    }
  };

  useEffect(() => {
    speakToScreenReader("Welcome to Beat Sense Studio. Use voice and beat panels.");
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-800 p-4 flex items-start justify-center py-12">
      <div className="w-full max-w-6xl mx-auto space-y-8 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          {/* Voice Panel */}
          <VoiceInteractionPanel speakToScreenReader={speakToScreenReader} />

          {/* Beat Panel */}
          <BeatVibrationPanel speakToScreenReader={speakToScreenReader} />
        </div>
      </div>

      {/* ARIA Live Region for screen readers */}
      <div ref={liveRegionRef} className="sr-only" aria-live="polite" aria-atomic="true"></div>
    </div>
  );
};

export default DisabledPLPs;