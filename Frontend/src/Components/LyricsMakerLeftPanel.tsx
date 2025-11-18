import React, { useRef, useEffect } from "react";
import SelectInput from "../Components/SelectInput";
import { GradientButton } from "../Components/GradientButton";
import images from "../types/images";

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

interface LyricsMakerProps {
  topic: string;
  setTopic: (v: string) => void;
  style: string;
  setStyle: (v: string) => void;
  length: string;
  setLength: (v: string) => void;
  onGenerateLyrics: () => void;
}

export default function LyricsMakerLeftPanel({
  topic,
  setTopic,
  style,
  setStyle,
  length,
  setLength,
  onGenerateLyrics,
}: LyricsMakerProps) {
  return (
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
  );
}
