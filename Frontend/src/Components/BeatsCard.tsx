import { BsThreeDotsVertical } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";

interface Prop {
  image: string;
  title: string;
  subtitle: string;
  price: string;
}

const BeatsCard: React.FC<Prop> = ({ image, title, subtitle, price }) => {
  return (
    <div className="bg-black text-white shadow-md rounded-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      <div className="p-4 flex flex-col gap-2">
        {/* Title & Subtitle */}
        <div className="flex flex-between align-center justify-between">
          <div>
            <h1 className="text-primary font-semibold text-lg">{title}</h1>
            <p className="text-gray-500 text-sm">{subtitle}</p>
          </div>
          <BsThreeDotsVertical />
        </div>

        {/* Price & Icons */}
        <div className="flex justify-between items-center mt-2">
          <h1 className="font-bold text-primary">{price} FCFA</h1>
          <div className="flex gap-3 text-gray-600">
            <IoMdHeartEmpty className="cursor-pointer hover:text-red-500" />
            <FiDownload className="cursor-pointer hover:text-blue-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeatsCard;
