import React, { useState } from "react";
import PreviewCard from "../../Components/Previewcard";
import BeatMakerLeftPanel from "../../Components/BeatMakerLeftPanel";
import LyricsMakerLeftPanel from "../../Components/LyricsMakerLeftPanel";

export default function AIMakerPage() {
  const [activeTab, setActiveTab] = useState<"beat" | "lyrics">("beat");

  // Beat states
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("Trap");
  const [mood, setMood] = useState("Dark");
  const [bpm, setBpm] = useState(140);
  const [energy, setEnergy] = useState(70);

  // Lyrics states
  const [topic, setTopic] = useState("");
  const [style, setStyle] = useState("Trap");
  const [length, setLength] = useState("Medium (16 bars)");
  const [generatedLyrics, setGeneratedLyrics] = useState<string | undefined>(undefined);

  return (
    <div className="w-full min-h-screen bg-[#0d0d0d] text-white px-4 py-20">

      {/* Title */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mt-4">
          AI <span className="text-purple-400">Creator</span>
        </h1>

        <p className="text-gray-400 mt-3">
          Create beats or generate lyrics using AI
        </p>

        {/* Tabs */}
        <div className="mt-8 flex justify-center gap-4">
          <button
            className={`px-6 py-2 rounded-xl transition ${
              activeTab === "beat"
                ? "bg-purple-600 text-white"
                : "bg-[#1c1c1c] text-gray-400"
            }`}
            onClick={() => setActiveTab("beat")}
          >
            Beat Maker
          </button>

          <button
            className={`px-6 py-2 rounded-xl transition ${
              activeTab === "lyrics"
                ? "bg-purple-600 text-white"
                : "bg-[#1c1c1c] text-gray-400"
            }`}
            onClick={() => setActiveTab("lyrics")}
          >
            Lyrics Writer
          </button>
        </div>
      </div>

      {/* Panels */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {activeTab === "beat" ? (
          <BeatMakerLeftPanel
            description={description}
            setDescription={setDescription}
            genre={genre}
            setGenre={setGenre}
            mood={mood}
            setMood={setMood}
            bpm={bpm}
            setBpm={setBpm}
            energy={energy}
            setEnergy={setEnergy}
            onGenerate={() => console.log("Generate Beat")}
          />
        ) : (
          <LyricsMakerLeftPanel
            topic={topic}
            setTopic={setTopic}
            style={style}
            setStyle={setStyle}
            length={length}
            setLength={setLength}
            onGenerateLyrics={() => console.log("Generate Lyrics")}
          />
        )}

        <PreviewCard
  mode={activeTab} // "beat" or "lyrics"
  onPlay={() => console.log("Play")}
  onDownload={() => console.log("Download")}
  lyricsText={activeTab === "lyrics" ? generatedLyrics : undefined}
/>
      </div>

    </div>
  );
}
