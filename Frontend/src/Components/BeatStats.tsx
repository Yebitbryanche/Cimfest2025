import { GiProgression } from "react-icons/gi";

interface Props {
  image: any;
  num: number;
  text: string;
  subtitle: string;
}

const BeatStats: React.FC<Props> = ({ image, num, text, subtitle }) => {
  return (
    <div className="border border-gray-700 rounded-2xl p-5 bg-black w-full shadow-md flex flex-col items-center transform transition-transform duration-300 hover:scale-105">
      
      {/* Top: Image & Icon */}
      <div className="flex justify-between items-center w-full">
        <p className="w-12 h-12 object-cover rounded-full" >{image}</p> 
        <GiProgression className="text-purple-500 text-2xl animate-pulse" />
      </div>

      {/* Number with gradient */}
      <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 animate-gradient-x">
        {num}
      </p>

      {/* Text */}
      <p className="text-gray-600 text-lg font-semibold">{text}</p>
      <p className="text-purple-600 text-sm">{subtitle}</p>
    </div>
  );
};

export default BeatStats;
