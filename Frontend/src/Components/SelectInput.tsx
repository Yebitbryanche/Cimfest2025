import React from "react";

interface Props {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}

export default function SelectInput({ label, value, onChange, options }: Props) {
  return (
    <div className="w-full">
      <label className="text-sm font-semibold text-white">{label}</label>
      <select
        className="w-full mt-2 p-3 bg-[#1a1a1a] text-white rounded-xl focus:ring-2 focus:ring-purple-500"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
