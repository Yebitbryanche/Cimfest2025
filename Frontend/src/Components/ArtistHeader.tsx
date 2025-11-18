import { FiShare2, FiSettings, FiEdit3 } from "react-icons/fi";

export default function ArtistHeader() {
  return (
    <div className="bg-[#151515] w-full p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">

      {/* LEFT SIDE */}
      <div className="flex items-center gap-6">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-2xl font-semibold">
          AR
        </div>

        <div>
          <h1 className="text-3xl font-bold">Artist Name</h1>
          <p className="text-gray-400">
            Producer & Songwriter | Creating vibes since 2020
          </p>

          <div className="flex gap-2 mt-3">
            {["Trap", "Hip-Hop", "Lo-Fi"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-[#1f1f1f] rounded-full text-xs text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-10">

        {/* STATS */}
        <div className="text-center">
          <p className="text-purple-300 text-xl font-bold">12</p>
          <p className="text-gray-400 text-sm">Total Beats</p>
        </div>

        <div className="text-center">
          <p className="text-purple-300 text-xl font-bold">1.2K</p>
          <p className="text-gray-400 text-sm">Followers</p>
        </div>

        <div className="text-center">
          <p className="text-purple-300 text-xl font-bold">$3,456</p>
          <p className="text-gray-400 text-sm">Total Earnings</p>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-[#1e1e1e] rounded-lg flex items-center gap-2 text-gray-300">
            <FiShare2 /> Share
          </button>

          <button className="px-4 py-2 bg-[#1e1e1e] rounded-lg flex items-center gap-2 text-gray-300">
            <FiEdit3 /> Edit Profile
          </button>

          <button className="p-2 bg-[#1e1e1e] rounded-lg text-gray-300">
            <FiSettings />
          </button>
        </div>
      </div>

    </div>
  );
}
