import { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import { IoMusicalNotes } from "react-icons/io5";

const UploadBeats = () => {
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [coverImage, setCoverImage] = useState<File | null>(null);

  const handleAudioUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setAudioFile(e.target.files[0]);
  };

  const handleCoverUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setCoverImage(e.target.files[0]);
  };

  return (
    <div className="min-h-screen bg-[#0e0e0f] text-white p-6 flex justify-center">
      <div className="w-full max-w-3xl space-y-8">

        {/* Title */}
        <div>
          <h1 className="text-4xl font-bold">
            Upload <span className="text-purple-400">Beat</span>
          </h1>
          <p className="text-gray-400">Share your creation with the world</p>
        </div>

        {/* Audio File Upload */}
        <section className="bg-black/40 border border-gray-700 p-6 rounded-xl">
          <h2 className="text-lg font-semibold">Audio File</h2>
          <p className="text-sm text-gray-400 mb-4">
            Upload your beat file (MP3, WAV, or FLAC)
          </p>

          <label
            htmlFor="audio-upload"
            className="border border-dashed border-gray-600 rounded-xl p-10 
              flex flex-col items-center justify-center gap-3 cursor-pointer
              hover:border-purple-500 transition"
          >
            <FiUploadCloud className="text-4xl text-gray-400" />
            <p className="text-gray-300">
              {audioFile ? audioFile.name : "Drop your audio file here"}
            </p>
            <span className="text-gray-500 text-sm">or click to browse</span>

            <input
              id="audio-upload"
              type="file"
              accept="audio/*"
              className="hidden"
              onChange={handleAudioUpload}
            />
          </label>
        </section>

        {/* Beat Details */}
        <section className="bg-black/40 border border-gray-700 p-6 rounded-xl">
          <h2 className="text-lg font-semibold">Beat Details</h2>
          <p className="text-sm text-gray-400 mb-4">Tell us about your beat</p>

          {/* Title */}
          <div className="mb-4">
            <label className="block mb-1 text-gray-300">Title</label>
            <input
              type="text"
              className="w-full p-3 bg-black/30 border border-gray-600 rounded-md 
                placeholder-gray-500 focus:ring-2 focus:ring-purple-500 outline-none"
              placeholder="Dark Trap Supreme"
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block mb-1 text-gray-300">Description</label>
            <textarea
              className="w-full p-3 bg-black/30 border border-gray-600 rounded-md 
                placeholder-gray-500 h-24 focus:ring-2 focus:ring-purple-500 outline-none"
              placeholder="Describe your beat, mood, and style..."
            ></textarea>
          </div>

          {/* Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div>
              <label className="block mb-1 text-gray-300">Genre</label>
              <select className="w-full p-3 bg-black/30 border border-gray-600 rounded-md">
                <option>Select genre</option>
                <option>Trap</option>
                <option>Afrobeat</option>
                <option>RnB</option>
                <option>Hip Hop</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 text-gray-300">BPM</label>
              <input
                type="number"
                className="w-full p-3 bg-black/30 border border-gray-600 rounded-md"
                placeholder="140"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-300">Key</label>
              <select className="w-full p-3 bg-black/30 border border-gray-600 rounded-md">
                <option>Select key</option>
                <option>C minor</option>
                <option>D major</option>
                <option>E minor</option>
                <option>G minor</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 text-gray-300">Price ($)</label>
              <input
                type="number"
                className="w-full p-3 bg-black/30 border border-gray-600 rounded-md"
                placeholder="29.99"
              />
            </div>
          </div>

          {/* Tags */}
          <div className="mt-4">
            <label className="block mb-1 text-gray-300">Tags</label>
            <input
              type="text"
              className="w-full p-3 bg-black/30 border border-gray-600 rounded-md 
                placeholder-gray-500 outline-none"
              placeholder="dark, trap, 808, hard (comma separated)"
            />
          </div>
        </section>

        {/* Cover Image */}
        <section className="bg-black/40 border border-gray-700 p-6 rounded-xl">
          <h2 className="text-lg font-semibold">Cover Image (Optional)</h2>
          <p className="text-sm text-gray-400 mb-4">
            Upload a cover image for your beat
          </p>

          <label
            htmlFor="cover-upload"
            className="border border-dashed border-gray-600 rounded-xl p-10 
              flex flex-col items-center justify-center gap-3 cursor-pointer
              hover:border-purple-500 transition"
          >
            <IoMusicalNotes className="text-4xl text-gray-400" />

            <p className="text-gray-300">
              {coverImage ? coverImage.name : "Upload cover image"}
            </p>

            <input
              id="cover-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleCoverUpload}
            />
          </label>
        </section>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            className="flex-1 py-3 rounded-lg bg-gradient-to-r 
              from-purple-500 to-pink-500 font-semibold"
          >
            Upload Beat
          </button>

          <button
            className="px-6 py-3 rounded-lg bg-gray-800 border border-gray-600"
          >
            Save as Draft
          </button>
        </div>

      </div>
    </div>
  );
};

export default UploadBeats;
