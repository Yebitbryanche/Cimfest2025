import { FiSearch } from "react-icons/fi";
import BeatsCard from "../../Components/BeatsCard";
import { GradientButton } from "../../Components/GradientButton";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { beatData } from "../../utils/beatData";

// Music-wave loader component
function MusicWaveLoader() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="flex space-x-2">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-2 h-6 bg-purple-600 rounded animate-wave"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>

      <style>{`
        @keyframes wave {
          0%, 100% { transform: scaleY(0.2); }
          50% { transform: scaleY(1); }
        }
        .animate-wave {
          animation: wave 1s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}

function Marketplace() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Simulate page loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2 seconds
    return () => clearTimeout(timer);
  }, []);

  // Navigate to beat details page
  const handleCardClick = (beatId: string) => {
    navigate(`/beat/${beatId}`);
  };

  // Search filter
  const filteredBeats = beatData.filter(
    (beat) =>
      beat.title.toLowerCase().includes(search.toLowerCase()) ||
      beat.subtitle.toLowerCase().includes(search.toLowerCase()) ||
      beat.price.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <MusicWaveLoader />;

  return (
    <div className="bg-tertiary text-white py-12 px-6 md:px-12 lg:px-32 mt-14">
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

      {/* BEATS LIST GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredBeats.length > 0 ? (
          filteredBeats.map((beat) => (
            <div
              key={beat.id}
              role="button"
              tabIndex={0}
              onClick={() => handleCardClick(beat.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") handleCardClick(beat.id);
              }}
            >
              <BeatsCard {...beat} />
            </div>
          ))
        ) : (
          <p className="text-gray-300 col-span-4 text-center pt-5">
            No beats found 😞
          </p>
        )}
      </div>

      {/* SEE MORE */}
      <div className="flex text-center justify-center p-5">
        <GradientButton title="See More Beats" />
      </div>
    </div>
  );
}

export default Marketplace;
