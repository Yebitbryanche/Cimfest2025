import { FiSearch } from "react-icons/fi";
import BeatsCard from "../../Components/BeatsCard";
import Button from "../../Components/Button";
import { GradientButton } from "../../Components/GradientButton";

function Marketplace() {
  const beats = [
    {
      image: "/beats/beat1.jpg",
      title: "Summer Vibes",
      subtitle: "DJ Neh",
      price: "$29",
    },
    {
      image: "/beats/beat2.jpg",
      title: "Afro Groove",
      subtitle: "DJ Nio",
      price: "$25",
    },
    {
      image: "/beats/beat3.jpg",
      title: "Romans Flow",
      subtitle: "DJ Leo",
      price: "$30",
    },
    {
      image: "/beats/beat1.jpg",
      title: "Summer Vibes",
      subtitle: "DJ Neh",
      price: "$29",
    },
    {
      image: "/beats/beat2.jpg",
      title: "Afro Groove",
      subtitle: "DJ Nio",
      price: "$25",
    },
    {
      image: "/beats/beat3.jpg",
      title: "Romans Flow",
      subtitle: "DJ Leo",
      price: "$30",
    },
    {
      image: "/beats/beat1.jpg",
      title: "Summer Vibes",
      subtitle: "DJ Neh",
      price: "$29",
    },
    {
      image: "/beats/beat2.jpg",
      title: "Afro Groove",
      subtitle: "DJ Nio",
      price: "$25",
    },
    {
      image: "/beats/beat3.jpg",
      title: "Romans Flow",
      subtitle: "DJ Leo",
      price: "$30",
    },
  ];

  return (
    <div className="bg-tertiary text-white py-12 px-32">
      <div>
        <h1 className="font-bold text-5xl ">
          Explore <span className="text-primary">Beats</span>
        </h1>
        <p className="text-gray pt-3">
          Discover the perfect sound for your next hit
        </p>
      </div>

      <div className="flex gap-4 my-4">
        <div className="relative flex-1">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search beats, producers, genres..."
            className="pl-10 w-full bg-muted border border-border rounded-md p-3"
          />
        </div>

        <select
          name="genre"
          id="genre"
          className="border border-border rounded-md p-2"
        >
          <option value="hiphop">Hip-hop</option>
          <option value="afro">Afro</option>
          <option value="romans">Romans</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {beats.map((beat, index) => (
          <BeatsCard key={index} {...beat} />
        ))}
      </div>
      <div className="flex text-center justify-center p-5">
        <GradientButton title="See More Beats" />
      </div>
    </div>
  );
}

export default Marketplace;
