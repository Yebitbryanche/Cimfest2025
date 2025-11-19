
import BeatDescriptionInput from "./BeatDescriptionInput";
import SelectInput from "./SelectInput";
import SliderInput from "./SliderInput";
import { GradientButton } from "./GradientButton";
import images from "../types/images";
import { DarkButton } from "./DarkButton"; // Assuming DarkButton is available for the preview controls

interface BeatMakerPanelProps {
  description: string;
  setDescription: (v: string) => void;
  genre: string;
  setGenre: (v: string) => void;
  mood: string;
  setMood: (v: string) => void;
  bpm: number;
  setBpm: (v: number) => void;
  energy: number;
  setEnergy: (v: number) => void;
  onGenerate: () => void;
  onPlay?: () => void; // New prop for Play button
  onDownload?: () => void; // New prop for Download button
}

export default function BeatMakerLeftPanel({
  description,
  setDescription,
  genre,
  setGenre,
  mood,
  setMood,
  bpm,
  setBpm,
  energy,
  setEnergy,
  onGenerate,
  onPlay,
  onDownload,
}: BeatMakerPanelProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Input Controls (Left Side) */}
      <div className="bg-[#151515] p-8 rounded-2xl space-y-6 shadow-[0_0_25px_rgba(0,0,0,0.3)]">
        <h2 className="text-2xl font-bold">Describe Your Beat</h2>
        <p className="text-gray-400 text-sm">
          Tell the AI what kind of beat you want to create
        </p>

        <BeatDescriptionInput value={description} onChange={setDescription} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SelectInput
            label="Genre"
            value={genre}
            onChange={setGenre}
            options={["Trap", "Afrobeat", "Drill", "R&B", "EDM"]}
          />

          <SelectInput
            label="Mood"
            value={mood}
            onChange={setMood}
            options={["Dark", "Happy", "Chill", "Energetic", "Sad"]}
          />
        </div>

        <SliderInput
          label="BPM"
          value={bpm}
          onChange={setBpm}
          min={60}
          max={200}
        />

        <SliderInput
          label="Energy Level"
          value={energy}
          onChange={setEnergy}
          min={0}
          max={100}
        />

        <div className="pt-4 w-full">
          <GradientButton
            title="Generate Beat"
            onClick={onGenerate}
            className="w-full flex items-center justify-center gap-2"
          >
            <img src={images.sparkel} alt="sparkel" className="w-4 h-4 invert" />
            <span>Generate Beat</span>
          </GradientButton>
        </div>
      </div>

      {/* Beat Preview & Tips (Right Side - taken from PreviewCard "beat" mode) */}
      <div className="bg-[#151515] border border-gray-700 p-6 rounded-2xl shadow-lg space-y-6">
        {/* Title */}
        <div>
          <h3 className="text-lg font-semibold text-white">
            Preview
          </h3>
          <p className="text-sm text-gray-400">
            Your generated beat will appear here
          </p>
        </div>

        {/* Preview Container */}
        <div
          className="w-full h-56 rounded-xl bg-gradient-to-br 
          from-purple-500/70 to-pink-500/70 backdrop-blur-md 
          flex items-center justify-center border border-white/10"
        >
          <img
            src={images.sparkel}
            alt="sparkel"
            className="w-20 h-20 opacity-90 invert"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3 mt-4">
          <DarkButton
            title="Play Preview"
            onClick={onPlay}
            className="flex items-center gap-3 w-full px-5 py-3 
            rounded-xl border border-gray-700 
            text-gray-200 bg-[#1a1a1a] 
            hover:bg-[#222222] hover:border-gray-600 transition"
          >
            <img src={images.play} alt="play" className="w-4 h-4 opacity-90" />
            <span>Play Preview</span>
          </DarkButton>

          <DarkButton
            title="Download"
            onClick={onDownload}
            className="flex items-center gap-3 w-full px-5 py-3 
            rounded-xl border border-gray-700 
            text-gray-200 bg-[#1a1a1a] 
            hover:bg-[#222222] hover:border-gray-600 transition"
          >
            <img src={images.download} alt="download" className="w-4 h-4 opacity-90" />
            <span>Download</span>
          </DarkButton>
        </div>

        {/* Tips Box */}
        <div className="bg-[#0f0f0f] border border-gray-700 p-5 rounded-xl">
          <h2 className="text-lg font-semibold text-white mb-3">Tips</h2>

          <ul className="text-gray-400 space-y-2 text-sm leading-relaxed">
            <li>• Be specific about instruments and sounds</li>
            <li>• Mention mood and energy level</li>
            <li>• Reference similar artists or beats</li>
            <li>• Include tempo and rhythm details</li>
            <li>• Experiment with different prompts</li>
          </ul>
        </div>
      </div>
    </div>
  );
}