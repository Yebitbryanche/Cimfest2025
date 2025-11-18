import { FiSearch } from "react-icons/fi";
import BeatsCard from "../../Components/BeatsCard";
import { GradientButton } from "../../Components/GradientButton";
import images from "../../types/images";
import { useState } from "react";

function Marketplace() {
  const [search, setSearch] = useState("");

  const beats = [
    { image: images.beat9, title: "Summer Vibes", subtitle: "DJ Neh", price: "$29" },
    { image: images.beat8, title: "Afro Groove", subtitle: "DJ Nio", price: "$25" },
    { image: images.beat7, title: "Romans Flow", subtitle: "DJ Leo", price: "$30" },
    { image: images.beat6, title: "Summer Vibes", subtitle: "DJ Neh", price: "$29" },
    { image: images.beat5, title: "Afro Groove", subtitle: "DJ Nio", price: "$25" },
    { image: images.beat4, title: "Romans Flow", subtitle: "DJ Leo", price: "$30" },
    { image: images.beat10, title: "Summer Vibes", subtitle: "DJ Neh", price: "$29" },
    { image: images.beat11, title: "Afro Groove", subtitle: "DJ Nio", price: "$25" },
    { image: images.beat12, title: "Romans Flow", subtitle: "DJ Leo", price: "$30" },
    { image: images.beat3, title: "Summer Vibes", subtitle: "DJ Neh", price: "$29" },
    { image: images.beat2, title: "Afro Groove", subtitle: "DJ Nio", price: "$25" },
    { image: images.beat1, title: "Romans Flow", subtitle: "DJ Leo", price: "$30" },
  ];

  // 🔍 FUNCTIONAL SEARCH FILTER
  const filteredBeats = beats.filter((beat) =>
    beat.title.toLowerCase().includes(search.toLowerCase()) ||
    beat.subtitle.toLowerCase().includes(search.toLowerCase()) ||
    beat.price.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-tertiary text-white py-12 px-32">
      <div>
        <h1 className="font-bold text-5xl">
          Explore <span className="text-primary">Beats</span>
        </h1>
        <p className="text-gray pt-3">Discover the perfect sound for your next hit</p>
      </div>

      {/* SEARCH + FILTER */}
      <div className="flex gap-4 my-9">
        <div className="relative flex-1">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            placeholder="Search beats, producers, genres..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
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

      {/* BEAT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredBeats.length > 0 ? (
          filteredBeats.map((beat, index) => <BeatsCard key={index} {...beat} />)
        ) : (
          <p className="text-gray-300 col-span-4 text-center pt-5">
            No beats found 😞
          </p>
        )}
      </div>

      <div className="flex text-center justify-center p-5">
        <GradientButton title="See More Beats" />
      </div>
    </div>
  );
}

export default Marketplace;
