import { FiDownload } from "react-icons/fi";
import { IoIosMusicalNotes, IoMdStarOutline } from "react-icons/io";
import BeatStats from "../../Components/BeatStats";
import { FaMusic } from "react-icons/fa";
import { GiMusicalScore, GiProgression, GiTakeMyMoney } from "react-icons/gi";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { FaPersonHarassing } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="bg-tertiary text-white min-h-screen py-12 px-32">
      {/* Welcome */}
      <div className="mb-8">
        <h1 className="font-bold text-5xl">
          Welcome back, <span className="text-primary">Artist</span>
        </h1>
        <p className="text-gray-400 pt-2">
          Here's what's happening with your music
        </p>
      </div>

      {/* Quick actions */}
      <div className="flex w-full gap-4 mb-8">
        <Link
          to="/UploadBeats"
          className="flex-1 border border-gray-500 p-5 flex items-center gap-3 
    hover:bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 
    transition-colors rounded-lg cursor-pointer"
        >
          <FiDownload className="text-2xl" />
          <p>Upload Beats</p>
        </Link>

        <Link
          to="/AIBeatMaker"
          className="flex-1 border border-gray-500 p-5 flex items-center gap-3 
    hover:bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 
    transition-colors rounded-lg cursor-pointer"
        >
          <IoMdStarOutline className="text-2xl" />
          <p>AI Beats Maker</p>
        </Link>

        <Link
          to="/CreateSong"
          className="flex-1 border border-gray-500 p-5 flex items-center gap-3 
    hover:bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 
    transition-colors rounded-lg cursor-pointer"
        >
          <IoIosMusicalNotes className="text-2xl" />
          <p>Create Song</p>
        </Link>
      </div>

      <div className="flex w-full gap-4 mb-8">
        <BeatStats
          image={<IoMusicalNotesOutline size={28} />}
          num={12}
          text="Total Beats"
          subtitle="+3 this month"
        />
        <BeatStats
          image={<GiMusicalScore size={28} />}
          num={8}
          text="Total Songs"
          subtitle="+2 this week"
        />
        <BeatStats
          image={<FaPersonHarassing size={28} />}
          num={5}
          text="Collaborations"
          subtitle="2 active"
        />
        <BeatStats
          image={<GiTakeMyMoney size={28} />}
          num={1234}
          text="Earnings"
          subtitle="+$230 this month"
        />
      </div>

      {/* Recent Activity & Top Performing Beats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <div className="bg-black/30 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-2">Recent Activity</h2>
          <p className="text-gray-400 mb-4">Your latest actions on BeatFlow</p>

          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-purple-600 flex items-center justify-center rounded-full">
                <FaMusic className="text-white text-xl" />
              </div>
              <div>
                <h3 className="font-semibold">Beat uploaded</h3>
                <p>Dark Trap Supreme</p>
                <p className="text-gray-400 text-sm">2 hours ago</p>
              </div>
            </div>
          ))}
        </div>

        {/* Top Performing Beats */}
        <div className="bg-black/30 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-2">Your Top Performing Beats</h2>
          <p className="text-gray-400 mb-4">Most popular this month</p>

          {[1, 2, 3].map((i) => (
            <div key={i} className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-600 flex items-center justify-center rounded-full">
                  <FaMusic className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold">Dark Trap Supreme</h3>
                  <p>120 plays</p>
                </div>
              </div>
              <GiProgression className="text-purple-500 text-2xl animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
