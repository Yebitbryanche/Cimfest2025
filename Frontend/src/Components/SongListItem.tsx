import { FiPlay } from "react-icons/fi";
import { BsMusicNoteBeamed } from "react-icons/bs";

interface SongItemProps {
  title: string;
  plays: string;
  likes: string;
}

export default function SongListItem({ title, plays, likes }: SongItemProps) {
  return (
    <div className="bg-[#151515] w-full p-5 rounded-2xl flex items-center justify-between hover:bg-[#1a1a1a] transition">
      
      {/* LEFT SECTION */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-white text-xl">
          <BsMusicNoteBeamed />
        </div>

        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-gray-400 text-sm">
            {plays} plays • {likes} likes
          </p>
        </div>
      </div>

      {/* PLAY BUTTON */}
      <button className="w-12 h-12 rounded-xl bg-[#1f1f1f] flex items-center justify-center hover:bg-[#242424] transition">
        <FiPlay className="text-gray-300" />
      </button>
    </div>
  );
}
