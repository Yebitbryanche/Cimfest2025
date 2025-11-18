import { FiSearch } from "react-icons/fi";
import BeatsCard from "../../Components/BeatsCard";
import { GradientButton } from "../../Components/GradientButton";
import images from "../../types/images";
import { useState } from "react";

function Marketplace() {
  const [search, setSearch] = useState("");

  const beats = [
    { image: images.beat9, title: "Summer Vibes", subtitle: "DJ Bryan", price: "2900" },
    { image: images.beat15, title: "Afro Groove", subtitle: "DJ Frank", price: "2500" },
    { image: images.beat7, title: "Romans Flow", subtitle: "DJ Precious", price: "3000" },
    { image: images.beat6, title: "Summer Vibes", subtitle: "DJ Bryan", price: "2900" },
    { image: images.beat14, title: "Afro Groove", subtitle: "DJ Nate", price: "2500" },
    { image: images.beat13, title: "Romans Flow", subtitle: "DJ George", price: "3000" },
    { image: images.beat10, title: "Summer Vibes", subtitle: "DJ Bryan", price: "2900" },
    { image: images.beat11, title: "Afro Groove", subtitle: "DJ Mazy", price: "2500" },
    { image: images.beat12, title: "Romans Flow", subtitle: "DJ Leo", price: "3000" },
    { image: images.beat3, title: "Summer Vibes", subtitle: "DJ Neh", price: "2900" },
    { image: images.beat2, title: "Afro Groove", subtitle: "DJ Nio", price: "2500" },
    { image: images.beat1, title: "Romans Flow", subtitle: "DJ Leo", price: "3000" },
  ];

  const filteredBeats = beats.filter((beat) =>
    beat.title.toLowerCase().includes(search.toLowerCase()) ||
    beat.subtitle.toLowerCase().includes(search.toLowerCase()) ||
    beat.price.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-tertiary text-white py-12 px-6 md:px-12 lg:px-32 mt-12">

      {/* HEADER */}
      <div>
        <h1 className="font-bold text-4xl md:text-5xl">
          Explore <span className="text-primary">Beats</span>
        </h1>
        <p className="text-gray-400 pt-3">
          Discover the perfect sound for your next hit
        </p>
      </div>

      {/* SEARCH + FILTER */}
      <div className="flex flex-col md:flex-row gap-4 my-9">
        {/* Search */}
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

        {/* Filter */}
        <select
          name="genre"
          id="genre"
          className="border border-border rounded-md p-3 bg-muted"
        >
          <option value="">All Genres</option>
          <option value="hiphop">Hip-hop</option>
          <option value="afro">Afro</option>
          <option value="romans">Romans</option>
        </select>
      </div>

      {/* BEAT GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredBeats.length > 0 ? (
          filteredBeats.map((beat, index) => <BeatsCard key={index} {...beat} />)
        ) : (
          <p className="text-gray-300 col-span-full text-center py-6">
            No beats found 😞
          </p>
        )}
      </div>

      {/* BUTTON */}
      <div className="flex justify-center p-8">
        <GradientButton title="See More Beats" />
      </div>

    </div>
  );
}

export default Marketplace;
