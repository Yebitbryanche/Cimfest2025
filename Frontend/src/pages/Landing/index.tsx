import { FiMusic, FiCpu, FiUsers, FiLock } from "react-icons/fi";
import Button from "../../Components/Button";
import { GradientButton } from "../../Components/GradientButton";
import { Link } from "react-router-dom";
import BeatsCard from "../../Components/BeatsCard";
import { GiFlatStar } from "react-icons/gi";
import { TbEditCircleOff } from "react-icons/tb";
import { BsMusicNote } from "react-icons/bs";
import images from "../../types/images";

function Home() {
  return (
    <main className="min-h-screen bg-[#0e0e0f] text-white px-4 sm:px-6 lg:px-16 py-12 mt-12">

      {/* HERO SECTION */}
      <section className="text-center max-w-4xl mx-auto mb-16">
        <div className="border border-gray-600 rounded-full px-6 py-2 inline-flex items-center bg-black/30 mb-4">
          <p className="text-primary font-semibold">The Future of Music Collaboration</p>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4">
          Create. Collaborate.
          <span className="text-primary"> Dominate.</span>
        </h1>

        <p className="text-gray-300 mb-8">
          Where producers meet songwriters, AI meets creativity, and blockchain meets security.
          Your music, your rules, your revolution.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Link to="/uploadbeats">
            <GradientButton title="Start Creating" />
          </Link>

          <Link to="/marketplace">
            <Button title="Explore Beats">Explore Beats</Button>
          </Link>
        </div>
      </section>

      {/* FEATURE ICONS */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20">
        {[
          { icon: <FiMusic />, title: "Beat Library", text: "Thousands of professional beats" },
          { icon: <FiCpu />, title: "AI Assistant", text: "Smart lyrics & creative tools" },
          { icon: <FiUsers />, title: "Collaborate", text: "Connect with artists worldwide" },
          { icon: <FiLock />, title: "Protected", text: "Blockchain ownership rights" },
        ].map((item, i) => (
          <div
            key={i}
            className="border border-gray-600 p-5 rounded-xl flex flex-col items-center text-center
                       gap-3 transform transition hover:scale-105 hover:shadow-[0_0_25px_#a855f7]"
          >
            <div className="text-4xl text-primary">{item.icon}</div>
            <h2 className="font-bold text-lg">{item.title}</h2>
            <p className="text-gray-300">{item.text}</p>
          </div>
        ))}
      </section>

      {/* BEAT PREVIEW */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-2">
          Explore <span className="text-primary">Beats</span>
        </h2>
        <p className="text-gray-300 text-center mb-8">
          Discover the perfect sound for your next hit
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          <BeatsCard image={images.beat3} title="Summer Vibes" subtitle="DJ Neh" price="53450" />
          <BeatsCard image={images.beat1} title="Afro Groove" subtitle="DJ Nio" price="250" />
          <BeatsCard image={images.beat2} title="Romans Flow" subtitle="DJ Leo" price="1000" />
        </div>
      </section>

      {/* AI SECTION */}
      <section className="max-w-6xl mx-auto mb-20 px-2 sm:px-6">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-2">
          AI-Powered <span className="text-primary">Creativity</span>
        </h2>
        <p className="text-gray-300 text-center mb-10">
          Let artificial intelligence amplify your artistic vision
        </p>

        {/* AI Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            {
              icon: <GiFlatStar />,
              title: "Lyric Generation",
              text: "AI-powered lyrics based on your theme & mood",
            },
            {
              icon: <TbEditCircleOff />,
              title: "Lyric Editing",
              text: "Refine your lyrics with smart suggestions",
            },
            {
              icon: <BsMusicNote />,
              title: "Release Timing",
              text: "Data-driven insights for best release dates",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-6 border border-gray-600 rounded-xl hover:border-primary transition"
            >
              <div className="border p-2 rounded-full text-primary text-2xl">{card.icon}</div>
              <div>
                <h3 className="font-bold text-lg">{card.title}</h3>
                <p className="text-gray-300">{card.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* AI Lyrics Assistant Input */}
        <div className="flex flex-col gap-4 w-full sm:w-3/4 lg:w-1/2 mx-auto p-6 border border-gray-600 rounded-xl mb-10">
          <p className="font-semibold text-white">Try AI Lyrics Assistant</p>
          <input
            type="text"
            placeholder="Describe your song theme..."
            className="p-3 rounded border border-gray-500 bg-black/20 text-white focus:outline-none focus:border-primary"
          />
          <GradientButton title="Generate Lyrics" />
        </div>

        {/* Link to AI Tools */}
        <div className="flex justify-center">
          <Link to="/AIBeatMaker">
            <Button title="Learn More About AI Tools">Learn More About AI Tools</Button>
          </Link>
        </div>
      </section>

    </main>
  );
}

export default Home;
