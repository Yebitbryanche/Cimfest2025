import { FiShare2, FiSettings, FiEdit3 } from "react-icons/fi";

export default function ArtistHeader() {
  return (
    <div className="
      bg-[#151515] w-full p-6 sm:p-8 
      rounded-3xl 
      flex flex-col md:flex-row 
      items-center md:items-start 
      justify-between 
      gap-6 md:gap-10
    ">
      
      {/* LEFT SIDE */}
      <div className="flex items-center md:items-start gap-5 sm:gap-6">
        {/* Avatar */}
        <div className="
          w-20 h-20 sm:w-24 sm:h-24 
          rounded-full 
          bg-linear-to-br 
          from-pink-400 to-purple-500 
          flex items-center justify-center 
          text-2xl sm:text-3xl 
          font-semibold
        ">
          AR
        </div>

        {/* Info */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">Artist Name</h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-xs sm:max-w-sm">
            Producer & Songwriter | Creating vibes since 2020
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-3">
            {["Trap", "Hip-Hop", "Lo-Fi"].map((tag) => (
              <span
                key={tag}
                className="
                  px-3 py-1 
                  bg-[#1f1f1f] 
                  rounded-full 
                  text-xs sm:text-sm 
                  text-gray-300
                "
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="
        flex flex-col sm:flex-row 
        sm:items-center 
        gap-6 sm:gap-10 
        w-full md:w-auto
      ">

        {/* Stats */}
        <div className="flex justify-between sm:justify-center gap-8 sm:gap-10 w-full sm:w-auto">
          <div className="text-center">
            <p className="text-purple-300 text-xl sm:text-2xl font-bold">12</p>
            <p className="text-gray-400 text-xs sm:text-sm">Total Beats</p>
          </div>

          <div className="text-center">
            <p className="text-purple-300 text-xl sm:text-2xl font-bold">1.2K</p>
            <p className="text-gray-400 text-xs sm:text-sm">Followers</p>
          </div>

          <div className="text-center">
            <p className="text-purple-300 text-xl sm:text-2xl font-bold">$3,456</p>
            <p className="text-gray-400 text-xs sm:text-sm">Total Earnings</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="
          flex flex-wrap sm:flex-nowrap 
          gap-3 
          w-full sm:w-auto
        ">
          <button className="
            px-4 py-2 
            bg-[#1e1e1e] 
            rounded-lg 
            flex items-center 
            gap-2 
            text-gray-300 
            justify-center w-full sm:w-auto
          ">
            <FiShare2 /> Share
          </button>

          <button className="
            px-4 py-2 
            bg-[#1e1e1e] 
            rounded-lg 
            flex items-center 
            gap-2 
            text-gray-300 
            justify-center w-full sm:w-auto
          ">
            <FiEdit3 /> Edit Profile
          </button>

          <button className="
            p-2 
            bg-[#1e1e1e] 
            rounded-lg 
            text-gray-300 
            w-full sm:w-auto
            flex justify-center
          ">
            <FiSettings />
          </button>
        </div>

      </div>
    </div>
  );
}
