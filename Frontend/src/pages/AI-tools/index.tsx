import { useState, useEffect } from "react";
// Import the new third panel component
import DisabledPLPs from "../../Components/DisabledPLPs";
import BeatMakerLeftPanel from "../../Components/BeatMakerPanel";
import LyricsMakerLeftPanel from "../../Components/LyricsMakerPanel";
import MusicWaveLoader from "../../Components/MusicWaveLoader";

type ActiveTab = "beat" | "lyrics" | "beatsense";

export default function AIMakerPage() {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<ActiveTab>("beat");

  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("Trap");
  const [mood, setMood] = useState("Dark");
  const [bpm, setBpm] = useState(140);
  const [energy, setEnergy] = useState(70);

  const [topic, setTopic] = useState("");
  const [style, setStyle] = useState("Trap");
  const [length, setLength] = useState("Medium (16 bars)");
  const [generatedLyrics, setGeneratedLyrics] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // 1 second loader
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <MusicWaveLoader />;

  const handleGenerateBeat = () => {
    console.log("Generating Beat with params:", {
      description,
      genre,
      mood,
      bpm,
      energy,
    });
  };

  const handleGenerateLyrics = () => {
    console.log("Generating Lyrics with params:", { topic, style, length });
    setGeneratedLyrics(`(Verse 1)
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
  };

  const getTabClass = (tabName: ActiveTab) =>
    `px-6 py-2 rounded-xl transition ${
      tabName === activeTab
        ? "bg-purple-600 text-white"
        : "bg-[#1c1c1c] text-gray-400"
    }`;

  return (
    <div className="w-full min-h-screen bg-[#0d0d0d] text-white px-4 py-20">
      {/* Title and Tabs */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mt-4">
          AI <span className="text-purple-400">Creator</span> 🎧
        </h1>
        <p className="text-gray-400 mt-3">
          Create beats or generate lyrics using AI
        </p>
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <button
            className={getTabClass("beat")}
            onClick={() => setActiveTab("beat")}
          >
            Beat Maker
          </button>
          <button
            className={getTabClass("lyrics")}
            onClick={() => setActiveTab("lyrics")}
          >
            Lyrics Writer
          </button>
          <button
            className={getTabClass("beatsense")}
            onClick={() => setActiveTab("beatsense")}
          >
            Beat Sense
          </button>
        </div>
      </div>

      {/* Panels */}
      <div className="max-w-7xl mx-auto">
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
            onGenerate={handleGenerateBeat}
            onPlay={() => console.log("Play Beat")}
            onDownload={() => console.log("Download Beat")}
          />
        )}
        {activeTab === "lyrics" && (
          <LyricsMakerLeftPanel
            topic={topic}
            setTopic={setTopic}
            style={style}
            setStyle={setStyle}
            length={length}
            setLength={setLength}
            onGenerateLyrics={handleGenerateLyrics}
            lyricsText={generatedLyrics}
          />
        )}
        {activeTab === "beatsense" && <DisabledPLPs />}
      </div>
    </div>
  );
}
