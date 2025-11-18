import React, { useRef, useEffect } from "react";
import SelectInput from "./SelectInput";
import { GradientButton } from "./GradientButton";
import images from "../types/images";

// --- TextareaAutosize Component (Unchanged) ---
interface AutosizeProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  minRows?: number;
}

const TextareaAutosize: React.FC<AutosizeProps> = ({ minRows = 1, style, ...props }) => {
  const ref = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const computedLineHeight = parseInt(getComputedStyle(el).lineHeight || "24", 10);
    const minHeight = minRows * computedLineHeight;

    const resize = () => {
      el.style.height = "auto";
      el.style.height = Math.max(el.scrollHeight, minHeight) + "px";
    };

    resize();
    el.addEventListener("input", resize);
    return () => el.removeEventListener("input", resize);
  }, [minRows]);

  return <textarea ref={ref} style={{ ...style, resize: "none", overflow: "hidden" }} {...props} />;
};
// ----------------------------------------------


interface LyricsMakerProps {
  topic: string;
  setTopic: (v: string) => void;
  style: string;
  setStyle: (v: string) => void;
  length: string;
  setLength: (v: string) => void;
  onGenerateLyrics: () => void;
  lyricsText?: string; // New prop for displaying generated lyrics
}

export default function LyricsMakerLeftPanel({
  topic,
  setTopic,
  style,
  setStyle,
  length,
  setLength,
  onGenerateLyrics,
  lyricsText,
}: LyricsMakerProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      
      {/* Input Controls (Left Side) */}
      <div className="bg-[#151515] p-8 rounded-2xl space-y-6 shadow-[0_0_25px_rgba(0,0,0,0.3)]">
        <h2 className="text-2xl font-bold">Create Lyrics</h2>
        <p className="text-gray-400 text-sm">
          Describe the idea or topic of the lyrics you want the AI to generate
        </p>

        <div>
          <label className="text-sm text-gray-300">Topic / Story</label>
          <TextareaAutosize
            value={topic}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setTopic(e.target.value)}
            minRows={4}
            className="w-full px-4 py-3 rounded-xl bg-[#1E1E1E] text-white placeholder-gray-500 outline-none border border-transparent focus:border-purple-500 transition"
            placeholder="Describe the story, vibe, or message..."
          />
        </div>

        <SelectInput
          label="Style"
          value={style}
          onChange={setStyle}
          options={["Trap", "Afrobeat", "RnB", "Rap", "Soul", "Pop"]}
        />

        <SelectInput
          label="Song Length"
          value={length}
          onChange={setLength}
          options={["Short (8 bars)", "Medium (16 bars)", "Full (32 bars)"]}
        />

        <div className="pt-4 w-full">
          <GradientButton
            title="Generate Lyrics"
            onClick={onGenerateLyrics}
            className="w-full flex items-center justify-center gap-2"
          >
            <img src={images.sparkel} alt="sparkel" className="w-4 h-4 invert" />
            <span>Generate Lyrics</span>
          </GradientButton>
        </div>
      </div>

      {/* Lyrics Preview & Tips (Right Side - taken from PreviewCard "lyrics" mode) */}
      <div className="bg-[#151515] border border-gray-700 p-6 rounded-2xl shadow-lg space-y-6">
        {/* Title */}
        <div>
          <h3 className="text-lg font-semibold text-white">
            Lyrics Preview
          </h3>
          <p className="text-sm text-gray-400">
            Generated lyrics will appear here
          </p>
        </div>

        {/* Preview Container */}
        <div
          className="w-full h-56 p-4 rounded-xl bg-[#1a1a1a] border border-gray-700 
          overflow-y-auto text-gray-100 text-sm whitespace-pre-wrap"
        >
          {lyricsText || "Your lyrics will appear here..."}
        </div>

        {/* Tips Box */}
        <div className="bg-[#0f0f0f] border border-gray-700 p-5 rounded-xl">
          <h2 className="text-lg font-semibold text-white mb-3">Tips</h2>

          <ul className="text-gray-400 space-y-2 text-sm leading-relaxed">
            <li>• Review your lyrics carefully</li>
            <li>• Check for flow and rhyme</li>
            <li>• Ensure the lyrics match the beat</li>
            <li>• Experiment with different styles and lengths</li>
          </ul>
        </div>
      </div>
    </div>
  );
}