import React from "react";
import { DarkButton } from "./DarkButton";
import images from "../types/images";

interface Props {
  onPlay: () => void;
  onDownload: () => void;
}

export default function PreviewCard({ onPlay, onDownload }: Props) {
  return (
    <div className="bg-[#151515] border border-gray-700 p-6 rounded-2xl shadow-lg space-y-6">

      {/* Title */}
      <div>
        <h3 className="text-lg font-semibold text-white">Preview</h3>
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
  );
}
