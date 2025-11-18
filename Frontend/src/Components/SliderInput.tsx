interface Props {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

export default function SliderInput({
  label,
  value,
  onChange,
  min = 0,
  max = 100,
}: Props) {
  return (
    <div className="w-full">
      <div className="flex justify-between text-white text-sm font-semibold">
        <span>{label}</span>
        <span>{value}</span>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        value={value}
        className="w-full accent-purple-500 mt-2"
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
}
