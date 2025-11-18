import React, { useState } from "react";
import BeatDescriptionInput from "../../Components/BeatDescriptionInput";
import SelectInput from "../../Components/SelectInput";
import SliderInput from "../../Components/SliderInput";
import PreviewCard from "../../Components/Previewcard";
import { GradientButton } from "../../Components/GradientButton";
import images from "../../types/images";


export default function AIMakerPage() {
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("Trap");
  const [mood, setMood] = useState("Dark");
  const [bpm, setBpm] = useState(140);
  const [energy, setEnergy] = useState(70);

  return (
    <div className="w-full min-h-screen bg-[#0d0d0d] text-white px-4 py-20">
      
      {/* Center Title */}
      <div className="text-center mb-16">
        

        <h1 className="text-4xl md:text-5xl font-bold mt-4">
          AI <span className="text-purple-400">Beat Maker</span>
        </h1>

        <p className="text-gray-400 mt-3">
          Describe your vision, and our AI will create the perfect beat
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* LEFT PANEL */}
        <div className="bg-[#151515] p-8 rounded-2xl space-y-6">
          <h2 className="text-2xl font-bold">Describe Your Beat</h2>
          <p className="text-gray-400 text-sm">Tell the AI what kind of beat you want to create</p>

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

          <SliderInput label="BPM" value={bpm} onChange={setBpm} min={60} max={200} />
          <SliderInput label="Energy Level" value={energy} onChange={setEnergy} min={0} max={100} />

          <div className="pt-4 w-full" >
            <GradientButton title="Generate Beat" onClick={() => console.log("Generate")} className="w-full" >
                <img src={images.sparkel} alt="sparkel" className="w-4 h-4 invert" />
                <span>Generate Beat</span>
              </GradientButton>
              
          </div>
        </div>

        {/* RIGHT PANEL */}
        <PreviewCard
          onPlay={() => console.log("Play")}
          onDownload={() => console.log("Download")}
        />
      </div>
    </div>
  );
}
