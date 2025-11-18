import { FiMusic, FiCpu, FiUsers, FiLock } from "react-icons/fi";
import Button from "../../Components/Button";
import { GradientButton } from "../../Components/GradientButton";
import { Link } from "react-router-dom";
import BeatsCard from "../../Components/BeatsCard";
import { GiFlatStar } from "react-icons/gi";
import { TbEditCircleOff } from "react-icons/tb";
import { BsMusicNote } from "react-icons/bs";

function Home() {
  return (
    <main className="min-h-screen bg-[#0e0e0f] text-white flex flex-col items-center justify-center px-4 py-12">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mb-12">
        <div className="border border-gray-600 rounded-full px-6 py-2 inline-flex items-center justify-center mx-auto bg-black/30 mb-4">
          <p className="text-primary font-semibold text-center">
            The Future of Music Collaboration
          </p>
        </div>

        <h1 className="text-4xl sm:text-7xl font-bold mb-4">
          Create. Collaborate.<span className="text-primary"> Dominate.</span>
        </h1>

        <p className="text-gray-300 mb-6 py-4">
          Where producers meet songwriters, AI meets creativity, and blockchain
          meets security. Your music, your rules, your revolution.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/uploadbeats">
            <GradientButton title="Start Creating" />
          </Link>
          <Link to="/marketplace">
            <Button title="Explore Beats" />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="flex justify-center gap-6 max-w-6xl">
        {/* Beat Library */}
        <div
          className="border border-gray-600 p-3 rounded-xl flex flex-col items-center text-center gap-3 w-full sm:w-1/2 md:w-1/4
          transform transition duration-300 hover:scale-105 hover:shadow-[0_0_25px_#a855f7]"
        >
          <FiMusic className="text-4xl text-primary" />
          <h2 className="font-bold text-lg">Beat Library</h2>
          <p>Thousands of professional beats</p>
        </div>

        {/* AI Assistant */}
        <div
          className="border border-gray-600 p-3 rounded-xl flex flex-col items-center text-center gap-3 w-full sm:w-1/2 md:w-1/4
          transform transition duration-300 hover:scale-105 hover:shadow-[0_0_25px_#a855f7]"
        >
          <FiCpu className="text-4xl text-primary" />
          <h2 className="font-bold text-lg">AI Assistant</h2>
          <p>Smart lyrics & creative tools</p>
        </div>

        {/* Collaborate */}
        <div
          className="border border-gray-600 p-3 rounded-xl flex flex-col items-center text-center gap-3 w-full sm:w-1/2 md:w-1/4
          transform transition duration-300 hover:scale-105 hover:shadow-[0_0_25px_#a855f7]"
        >
          <FiUsers className="text-4xl text-primary" />
          <h2 className="font-bold text-lg">Collaborate</h2>
          <p>Connect with artists worldwide</p>
        </div>

        {/* Protected */}
        <div
          className="border border-gray-600 p-3 rounded-xl flex flex-col items-center text-center gap-3 w-full sm:w-1/2 md:w-1/4
          transform transition duration-300 hover:scale-105 hover:shadow-[0_0_25px_#a855f7]"
        >
          <FiLock className="text-4xl text-primary" />
          <h2 className="font-bold text-lg">Protected</h2>
          <p>Blockchain ownership rights</p>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center px-4 py-22">
        <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-center">
          Explore <span className="text-primary">Beats</span>
        </h1>
        <p className="text-gray-300 mb-6 text-center">
          Discover the perfect sound for your next hit
        </p>

        <div className="flex justify-center gap-5 py-5">
          <BeatsCard
            image="/beats/beat1.jpg"
            title="Summer Vibes"
            subtitle="DJ Neh"
            price="53450"
          />
          <BeatsCard
            image="/beats/beat2.jpg"
            title="Afro Groove"
            subtitle="DJ Nio"
            price="250"
          />
          <BeatsCard
            image="/beats/beat3.jpg"
            title="Romans Flow"
            subtitle="DJ Leo"
            price="1000"
          />
        </div>
      </section>
      <section className="flex flex-col items-center px-4 py-12 max-w-6xl mx-auto">
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-center">
        AI-Powered <span className="text-primary">Creativity</span>
      </h1>
      <p className="text-gray-300 mb-8 text-center">
        Let artificial intelligence amplify your artistic vision
      </p>

      {/* Features */}
      <div className="flex flex-col md:flex-row gap-6 w-full mb-8">
        {/* Lyric Generation */}
        <div className="flex flex-row items-start gap-4 p-6 border border-gray-600 rounded-xl hover:border-primary transition w-full md:w-1/3">
          <div className="border p-2 rounded-full text-primary text-2xl">
            <GiFlatStar />
          </div>
          <div>
            <h2 className="font-bold text-lg">Lyric Generation</h2>
            <p className="text-gray-300">AI-powered lyrics based on your theme and mood</p>
          </div>
        </div>

        {/* Lyric Editing */}
        <div className="flex flex-row items-start gap-4 p-6 border border-gray-600 rounded-xl hover:border-primary transition w-full md:w-1/3">
          <div className="border p-2 rounded-full text-primary text-2xl">
            <TbEditCircleOff />
          </div>
          <div>
            <h2 className="font-bold text-lg">Lyric Editing</h2>
            <p className="text-gray-300">Refine your lyrics with smart AI suggestions</p>
          </div>
        </div>

        {/* Release Timing */}
        <div className="flex flex-row items-start gap-4 p-6 border border-gray-600 rounded-xl hover:border-primary transition w-full md:w-1/3">
          <div className="border p-2 rounded-full text-primary text-2xl">
            <BsMusicNote />
          </div>
          <div>
            <h2 className="font-bold text-lg">Release Timing</h2>
            <p className="text-gray-300">Data-driven insights for optimal release dates</p>
          </div>
        </div>
      </div>

      {/* AI Lyrics Assistant */}
      <div className="flex flex-col gap-4 w-full sm:w-2/3 p-6 border border-gray-600 rounded-xl mb-6">
        <p className="font-semibold text-white">Try AI Lyrics Assistant</p>
        <input
          type="text"
          placeholder="Describe your song theme"
          className="p-2 rounded border border-gray-500 bg-black/20 text-white focus:outline-none focus:border-primary"
        />
        <GradientButton title="Generate Lyrics" />
      </div>

      {/* Link to AI Beat Maker */}
      <Link to="/AIBeatMaker">
        <Button title="Learn More About AI Tools" className="hover:bg-primary"/>
      </Link>
      </section>
    </main>
  );
}

export default Home;
