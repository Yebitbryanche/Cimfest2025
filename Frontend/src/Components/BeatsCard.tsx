import { useState } from "react";
import { FiDownload } from "react-icons/fi";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

interface Prop {
  image: string;
  title: string;
  subtitle: string;
  price: string;
  downloadUrl?: string; // Optional: URL to the beat file
}

const BeatsCard: React.FC<Prop> = ({ image, title, subtitle, price, downloadUrl }) => {
  const [liked, setLiked] = useState(false);

  // Toggle like
  const handleLike = () => {
    setLiked(!liked);
  };

  // Handle download
  const handleDownload = () => {
    if (!downloadUrl) return;
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = `${title}.mp3`; // or appropriate file extension
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-black text-white shadow-md rounded-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      <div className="p-4 flex flex-col gap-2">
        {/* Title & Subtitle */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-primary font-semibold text-lg">{title}</h1>
            <p className="text-gray-500 text-sm">{subtitle}</p>
          </div>
        </div>

        {/* Price & Icons */}
        <div className="flex justify-between items-center mt-2">
          <h1 className="font-bold text-white">Collaborate</h1>
          <div className="flex gap-3 text-gray-600">
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
              onClick={handleDownload}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeatsCard;
