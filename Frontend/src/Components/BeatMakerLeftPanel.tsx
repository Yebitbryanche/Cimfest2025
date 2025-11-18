
import BeatDescriptionInput from "../Components/BeatDescriptionInput";
import SelectInput from "../Components/SelectInput";
import SliderInput from "../Components/SliderInput";
import { GradientButton } from "../Components/GradientButton";
import images from "../types/images";

interface BeatMakerLeftPanelProps {
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
}: BeatMakerLeftPanelProps) {
  return (
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
  );
}
