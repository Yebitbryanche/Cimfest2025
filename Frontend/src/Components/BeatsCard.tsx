import { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

interface BeatProps {
  id?: string;
  image?: string;
  title?: string;
  subtitle?: string;
  price?: number | string;
  audio?: string; // <-- MAKE OPTIONAL
  downloadUrl?: string;
}

const BeatsCard: React.FC<BeatProps> = ({
  image,
  title,
  subtitle,
  audio,
  downloadUrl,
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [liked, setLiked] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current || !audio) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  const handleLike = () => setLiked(!liked);

  const handleDownload = () => {
    if (!downloadUrl) return;
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = `${title}.mp3`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-black text-white shadow-md rounded-md overflow-hidden">
      {/* IMAGE */}
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      {/* AUDIO — ONLY RENDER IF PRESENT */}
      {audio && (
        <audio
          ref={audioRef}
          src={audio}
          onPause={() => setPlaying(false)}
          onPlay={() => setPlaying(true)}
        />
      )}

      <div className="p-4 flex flex-col gap-2">
        {/* Title + Subtitle */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-primary font-semibold text-lg">{title}</h1>
            <p className="text-gray-500 text-sm">{subtitle}</p>
          </div>

          {/* Play Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (audio) togglePlay();
            }}
            disabled={!audio}
            className={`bg-primary text-white p-3 rounded-full ${
              !audio && "opacity-40 cursor-not-allowed"
            }`}
          >
            {playing ? <FaPause /> : <FaPlay />}
          </button>
        </div>

        {/* Price + Icons */}
        <div className="flex justify-between items-center mt-2">
          <h1 className="font-bold text-white">Collaborate</h1>

          <div className="flex gap-3 text-gray-400">
            {liked ? (
              <IoMdHeart
                className="cursor-pointer text-red-500"
                onClick={handleLike}
              />
            ) : (
              <IoMdHeartEmpty
                className="cursor-pointer hover:text-red-500"
                onClick={handleLike}
              />
            )}

            <FiDownload
              className="cursor-pointer hover:text-blue-500"
              onClick={(e) => {
                e.stopPropagation();
                handleDownload();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeatsCard;
