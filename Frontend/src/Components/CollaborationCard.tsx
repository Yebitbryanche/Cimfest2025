import { FiUsers } from "react-icons/fi";
import { FiPlay } from "react-icons/fi";

interface CollaborationProps {
  title: string;
  artists: string;
  plays: string;
}

export default function CollaborationCard({ title, artists, plays }: CollaborationProps) {
  return (
    <div className="bg-[#151515] w-full p-5 rounded-2xl flex items-center justify-between hover:bg-[#1a1a1a] transition">

      {/* LEFT */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center text-white text-xl">
          <FiUsers />
        </div>

        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-gray-400 text-sm">{artists}</p>
          <p className="text-gray-500 text-xs">{plays} plays</p>
        </div>
      </div>

      {/* PLAY BUTTON */}
      <button className="w-12 h-12 rounded-xl bg-[#1f1f1f] flex items-center justify-center hover:bg-[#232323] transition">
        <FiPlay className="text-gray-300" />
      </button>
    </div>
  );
}
