import React from "react";
import { DarkButton } from "./DarkButton";
import images from "../types/images";
interface Props {
  onPlay: () => void;
  onDownload: () => void;
}

export default function PreviewCard({ onPlay, onDownload }: Props) {
  return (
    <div className="bg-[#151515] rounded-2xl p-6 w-full flex flex-col items-center">
      <h3 className="text-lg font-semibold mb-3 text-white">Preview</h3>
      <p className="text-sm text-gray-400 mb-4">Your generated beat will appear here</p>

      <div className="w-full h-56 rounded-xl bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
        <span className="text-white text-4xl opacity-80">
            <img src={images.sparkel} alt="sparkel"  className="w-20 h-20 filter brightness-0 invert"/>
        </span>
      </div>

      <div className="w-full mt-6 space-y-3 flex flex-col">
     <DarkButton  title="Play Preview" onClick={onPlay} 
            className="flex items-center opacity-50 gap-3 w-full px-5 py-3 
               rounded-xl border border-gray-700 
               text-gray-300 bg-[#1a1a1a] 
               hover:bg-[#222222] transition">
          <img src={images.play} alt="play" className="w-4 h-4" />
          <span>Play Preview</span>
            
         </DarkButton>

        <DarkButton title="Download" onClick={onDownload}   
                className="flex items-center  opacity-50  gap-3 w-full px-5 py-3 
               rounded-xl border border-gray-700 
               text-gray-300 bg-[#1a1a1a] 
               hover:bg-[#222222] transition" >
          <img src={images.download} alt="download" className="w-4 h-4" />
          <span>Download</span>
          </DarkButton>
      </div>
    </div>
  );
}
