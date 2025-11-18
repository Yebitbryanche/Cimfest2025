import { useState } from "react";
// Import the new third panel component
import DisabledPLPs from "../../Components/DisabledPLPs"; // Assuming DisabledPLPs is in the same directory or accessible via this path

import BeatMakerLeftPanel from "../../Components/BeatMakerPanel";
import LyricsMakerLeftPanel from "../../Components/LyricsMakerPanel";

type ActiveTab = "beat" | "lyrics" | "beatsense"; // Updated type for new tab

export default function AIMakerPage() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("beat"); // Beat states

  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("Trap");
  const [mood, setMood] = useState("Dark");
  const [bpm, setBpm] = useState(140);
  const [energy, setEnergy] = useState(70); // Lyrics states

  const [topic, setTopic] = useState("");
  const [style, setStyle] = useState("Trap");
  const [length, setLength] = useState("Medium (16 bars)"); // In a real app, setGeneratedLyrics would be called after an API response
  const [generatedLyrics, setGeneratedLyrics] = useState<string | undefined>(
    undefined
  ); // Dummy generation functions for demonstration

  const handleGenerateBeat = () => {
    console.log("Generating Beat with params:", {
      description,
      genre,
      mood,
      bpm,
      energy,
    }); // In a real app, you would fetch the beat and update a beat state
  };

  const handleGenerateLyrics = () => {
    console.log("Generating Lyrics with params:", { topic, style, length }); // Dummy result for preview
    setGeneratedLyrics(`
(Verse 1)
Rolling through the city, late night chill
Topic's heavy, got a story to fulfill
Heartbeat's knocking like a trap drum drill
16 bars deep, yeah, I write what I feel.

(Chorus)
Purple skies, neon light in the rain
AI wrote this rhythm, easing the pain
From the dark side, yeah, we rise again
This is the new sound, nothing stays the same.
    `);
  }; // Helper function for tab button styling

  const getTabClass = (tabName: ActiveTab) =>
    `px-6 py-2 rounded-xl transition ${
      tabName === activeTab
        ? "bg-purple-600 text-white"
        : "bg-[#1c1c1c] text-gray-400"
    }`;

  return (
    <div className="w-full min-h-screen bg-[#0d0d0d] text-white px-4 py-20">
            {/* Title and Tabs */}     {" "}
      <div className="text-center mb-16">
               {" "}
        <h1 className="text-4xl md:text-5xl font-bold mt-4">
                    AI <span className="text-purple-400">Creator</span> 🎧      
           {" "}
        </h1>
               {" "}
        <p className="text-gray-400 mt-3">
                    Create beats or generate lyrics using AI        {" "}
        </p>
                {/* Tabs */}       {" "}
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
                   {" "}
          <button
            className={getTabClass("beat")}
            onClick={() => setActiveTab("beat")}
          >
                        Beat Maker          {" "}
          </button>
                   {" "}
          <button
            className={getTabClass("lyrics")}
            onClick={() => setActiveTab("lyrics")}
          >
                        Lyrics Writer          {" "}
          </button>
                   {" "}
          <button
            className={getTabClass("beatsense")}
            onClick={() => setActiveTab("beatsense")}
          >
                        Beat Sense          {" "}
          </button>
                 {" "}
        </div>
             {" "}
      </div>
            {/* Panels */}     {" "}
      <div className="max-w-7xl mx-auto">
                       {" "}
        {activeTab === "beat" && (
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
            onGenerate={handleGenerateBeat} // Add handlers for Play/Download since they were moved to the panel
            onPlay={() => console.log("Play Beat from AIMakerPage")}
            onDownload={() => console.log("Download Beat from AIMakerPage")}
          />
        )}
                       {" "}
        {activeTab === "lyrics" && (
          <LyricsMakerLeftPanel
            topic={topic}
            setTopic={setTopic}
            style={style}
            setStyle={setStyle}
            length={length}
            setLength={setLength}
            onGenerateLyrics={handleGenerateLyrics} // Pass the generated lyrics state to the panel for display
            lyricsText={generatedLyrics}
          />
        )}
                {/* New Tab Content */}       {" "}
        {activeTab === "beatsense" && <DisabledPLPs />}     {" "}
      </div>
         {" "}
    </div>
  );
}
