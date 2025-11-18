import React, { useEffect, useRef, useState } from "react";

interface BeatVibrationPanelProps {
  speakToScreenReader: (message: string) => void;
}

const beatPatterns = [
  [1, 0, 1, 1, 0, 0, 1],
  [1, 1, 0, 1, 0, 1, 0],
  [1, 0, 0, 1, 1, 1, 0],
  [0, 1, 0, 1, 0, 1, 1],
];

export default function BeatVibrationPanel({ speakToScreenReader }: BeatVibrationPanelProps) {
  /*** Beat Vibration States ***/
  const [isPlayingBeat, setIsPlayingBeat] = useState(false);
  const [currentPatternIndex, setCurrentPatternIndex] = useState(0);
  const [currentPattern, setCurrentPattern] = useState(beatPatterns[0]);
  const beatPatternRef = useRef<HTMLDivElement | null>(null);
  const beatIntervalRef = useRef<number | null>(null);
  const [beatStatus, setBeatStatus] = useState("Ready to play beat pattern");

  /*** Beat Vibration Handlers ***/
  const initBeatPattern = () => {
    if (!beatPatternRef.current) return;
    beatPatternRef.current.innerHTML = "";
    currentPattern.forEach((val, idx) => {
      const block = document.createElement("div");
      block.className =
        "beat-block w-10 rounded-t-md transition-all duration-200 " +
        (val ? "bg-gradient-to-t from-purple-600 to-purple-400" : "bg-gray-700");
      block.style.height = `${val ? 80 : 20}px`;
      block.setAttribute("aria-label", val ? "Beat active" : "Beat inactive");
      beatPatternRef.current!.appendChild(block);
    });
  };

  const stopBeat = () => {
    setIsPlayingBeat(false);
    setBeatStatus("Beat pattern stopped");
    speakToScreenReader("Beat pattern stopped");
    if (beatIntervalRef.current) clearInterval(beatIntervalRef.current);
    beatPatternRef.current?.querySelectorAll(".beat-block").forEach(block =>
      block.classList.remove("animate-vibrate", "bg-gradient-to-t", "from-blue-400", "to-blue-600", "shadow-lg")
    );
  };

  const startBeat = () => {
    stopBeat(); // Ensure any existing beat is stopped
    setIsPlayingBeat(true);
    setBeatStatus("Playing beat pattern with vibrations");
    speakToScreenReader("Beat pattern playing with vibration effects");

    let step = 0;
    beatIntervalRef.current = setInterval(() => {
      const blocks = beatPatternRef.current?.querySelectorAll<HTMLDivElement>(".beat-block");
      if (blocks) {
        // Reset previous step's highlight
        blocks.forEach(block => 
          block.classList.remove("animate-vibrate", "from-blue-400", "to-blue-600", "shadow-lg")
        );
        
        // Apply highlight to current step
        const currentBlock = blocks[step];
        if (currentBlock && currentPattern[step] === 1) {
          currentBlock.classList.add("animate-vibrate", "bg-gradient-to-t", "from-blue-400", "to-blue-600", "shadow-lg");
        }
      }
      step = (step + 1) % currentPattern.length;
    }, 500) as unknown as number;
  };


  const changePattern = () => {
    const nextIndex = (currentPatternIndex + 1) % beatPatterns.length;
    setCurrentPatternIndex(nextIndex);
    setCurrentPattern(beatPatterns[nextIndex]);
    setBeatStatus(`Changed to pattern ${nextIndex + 1}. Ready to play.`);
    speakToScreenReader(`Changed to beat pattern ${nextIndex + 1}.`);
  };

  /*** Effects ***/
  // Re-initialize beat pattern when currentPattern changes
  useEffect(() => {
    initBeatPattern();
    if (isPlayingBeat) {
      // If currently playing, restart with the new pattern
      startBeat();
    }
  }, [currentPattern]);
  
  // Cleanup effect
  useEffect(() => {
    return () => {
      if (beatIntervalRef.current) clearInterval(beatIntervalRef.current);
    };
  }, []);


  return (
    <section className="bg-gray-900 rounded-xl p-6 border border-purple-600 shadow-lg flex flex-col items-center w-full">
      <h2 className="text-xl font-semibold mb-4 text-center text-white">Beat Vibration Simulator</h2>
      <div ref={beatPatternRef} className="flex gap-2 h-32 items-end w-full"></div>
      <div className="mt-2 text-white">{beatStatus}</div>
      <div className="flex flex-wrap gap-4 justify-center mt-4 w-full">
        <button
          className="px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white transition disabled:opacity-50"
          disabled={isPlayingBeat}
          onClick={startBeat}
        >
          Play Beat Pattern
        </button>
        <button
          className="px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white transition disabled:opacity-50"
          disabled={!isPlayingBeat}
          onClick={stopBeat}
        >
          Stop Beat
        </button>
        <button
          className="px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white transition disabled:opacity-50"
          onClick={changePattern}
        >
          Change Pattern
        </button>
      </div>
    </section>
  );
}