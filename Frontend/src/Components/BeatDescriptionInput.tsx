import React from "react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function BeatDescriptionInput({ value, onChange }: Props) {
  return (
    <div className="w-full">
      <label className="text-sm font-semibold text-white">Beat Description</label>
      <textarea
        className="w-full mt-2 p-4 bg-[#1a1a1a] rounded-xl text-white h-32 focus:outline-none focus:ring-2 focus:ring-purple-500"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Describe the beat you want..."
      ></textarea>
    </div>
  );
}
