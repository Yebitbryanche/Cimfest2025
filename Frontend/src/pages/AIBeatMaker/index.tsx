import { useState } from "react";
import { IoSparkles, IoPlay, IoDownload } from "react-icons/io5";

const AIBeatMaker = () => {
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("Trap");
  const [mood, setMood] = useState("Dark");
  const [bpm, setBpm] = useState(140);
  const [energy, setEnergy] = useState(70);

  return (
    <div className="min-h-screen bg-[#0d0d0f] text-white p-8 flex justify-center">
      <div className="w-full max-w-6xl">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 bg-purple-700/30 text-purple-300 rounded-full text-sm mb-3">
            ✨ AI–Powered
          </div>

          <h1 className="text-4xl font-bold">AI <span className="text-purple-400">Beat Maker</span></h1>
          <p className="text-gray-400 mt-2">
            Describe your vision, and our AI will create the perfect beat
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Left Section — Inputs */}
          <div className="lg:col-span-2 bg-black/40 border border-gray-700 p-6 rounded-xl">
            <h2 className="text-xl font-bold mb-2">Describe Your Beat</h2>
            <p className="text-gray-400 mb-6">Tell the AI what kind of beat you want to create</p>

            {/* Description */}
            <div className="mb-6">
              <label className="block mb-2 text-gray-300 font-medium">Beat Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="A dark trap beat with heavy 808s, atmospheric synths, and hard-hitting drums..."
                className="w-full h-32 p-4 bg-black/30 border border-gray-600 rounded-lg 
                  placeholder-gray-500 focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </div>

            {/* Genre + Mood */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block mb-1 text-gray-300 font-medium">Genre</label>
                <select
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                  className="w-full p-3 bg-black/30 border border-gray-600 rounded-lg"
                >
                  <option>Trap</option>
                  <option>Afrobeat</option>
                  <option>Hip Hop</option>
                  <option>R&B</option>
                  <option>Lo-fi</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 text-gray-300 font-medium">Mood</label>
                <select
                  value={mood}
                  onChange={(e) => setMood(e.target.value)}
                  className="w-full p-3 bg-black/30 border border-gray-600 rounded-lg"
                >
                  <option>Dark</option>
                  <option>Happy</option>
                  <option>Energetic</option>
                  <option>Sad</option>
                  <option>Calm</option>
                </select>
              </div>
            </div>

            {/* BPM Slider */}
            <div className="mb-6">
              <label className="block mb-1 text-gray-300 font-medium">BPM: {bpm}</label>
              <input
                type="range"
                min={60}
                max={200}
                value={bpm}
                onChange={(e) => setBpm(Number(e.target.value))}
                className="w-full accent-purple-500"
              />
            </div>

            {/* Energy Slider */}
            <div className="mb-10">
              <label className="block mb-1 text-gray-300 font-medium">
                Energy Level: {energy}%
              </label>
              <input
                type="range"
                min={0}
                max={100}
                value={energy}
                onChange={(e) => setEnergy(Number(e.target.value))}
                className="w-full accent-purple-500"
              />
            </div>

            {/* GENERATE BUTTON */}
            <button
              className="w-full flex items-center justify-center gap-2 py-3 text-lg font-semibold 
                bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:opacity-90 transition"
            >
              <IoSparkles size={20} />
              Generate Beat
            </button>
          </div>

          {/* Right Section — Preview */}
          <div className="space-y-6">
            {/* Preview Box */}
            <div className="bg-black/40 border border-gray-700 p-6 rounded-xl">
              <h2 className="text-xl font-bold mb-2">Preview</h2>
              <p className="text-gray-400 mb-4">Your generated beat will appear here</p>

              <div className="bg-gradient-to-br from-purple-400 to-pink-500 h-56 rounded-xl
                  flex items-center justify-center text-white text-4xl opacity-90">
                <IoSparkles />
              </div>

              {/* Buttons */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <button className="py-3 bg-gray-800 border border-gray-600 rounded-lg flex items-center justify-center gap-2">
                  <IoPlay />
                  Play Preview
                </button>

                <button className="py-3 bg-gray-800 border border-gray-600 rounded-lg flex items-center justify-center gap-2">
                  <IoDownload />
                  Download
                </button>
              </div>
            </div>

            {/* Tips Box */}
            <div className="bg-black/40 border border-gray-700 p-6 rounded-xl">
              <h2 className="text-xl font-bold mb-3">Tips</h2>

              <ul className="text-gray-400 space-y-2 text-sm">
                <li>• Be specific about instruments and sounds</li>
                <li>• Mention mood and energy level</li>
                <li>• Reference similar artists or beats</li>
                <li>• Include tempo and rhythm details</li>
                <li>• Experiment with different prompts</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AIBeatMaker;
