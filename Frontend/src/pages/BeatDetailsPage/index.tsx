
import { useParams, useNavigate } from "react-router-dom";
import { beatData } from "../../utils/beatData";

export default function BeatDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const beat = beatData.find((b) => b.id === id);
  if (!beat) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6 ">
        <div className="text-center">
          <p className="text-2xl mb-4">Beat not found</p>
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 rounded-md bg-purple-600 hover:bg-purple-500"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // small helpers
  const similarBeats = beatData
    .filter((b) => b.id !== beat.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 md:px-12 py-8 mt-20">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT + MIDDLE (span 2 columns on large screens) */}
        <main className="lg:col-span-2 space-y-6">
          {/* Player / Cover */}
          <section className="bg-linear-to-br from-pink-500 via-purple-500 to-pink-400 rounded-xl overflow-hidden shadow-md">
            <div className="relative pt-[35%]">
              {/* image covers the top portion; using background gradient as in screenshot */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img src={beat.image} alt={beat.title} className="absolute inset-0 object-cover w-full h-full" />

              </div>
            </div>

            {/* meta area */}
            <div className="p-6 bg-[#0e0e10]">
              <div className="flex items-start justify-between">
                <div className="">
                  <h1 className="text-3xl md:text-4xl font-extrabold">
                    {beat.title}
                  </h1>
                  <div className="mt-3 flex items-center gap-3">
                    <div className="flex items-center gap-2 text-gray-300">
                      <div className="flex items-center justify-center w-8 h-8 bg-gray-800 rounded-full text-sm font-semibold">
                        {beat.subtitle?.slice(0, 2).toUpperCase() || "PX"}
                      </div>
                      <div>
                        <div className="text-sm text-gray-300">{beat.subtitle}</div>
                        <div className="text-xs text-gray-500">Producer</div>
                      </div>
                    </div>
                  </div>

                  {/* tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {/* replace with beat.tags if available */}
                    <span className="px-3 py-1 rounded-full bg-black/40 text-xs">Dark</span>
                    <span className="px-3 py-1 rounded-full bg-black/40 text-xs">Trap</span>
                    <span className="px-3 py-1 rounded-full bg-black/40 text-xs">808</span>
                    <span className="px-3 py-1 rounded-full bg-black/40 text-xs">Hard</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <button className="p-2 rounded-md bg-black/40 hover:bg-black/30">♡</button>
                  <button className="p-2 rounded-md bg-black/40 hover:bg-black/30">⤴️</button>
                </div>
              </div>

              <p className="mt-4 text-gray-300">{beat.description}</p>

              {/* stats row */}
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-black/30 rounded-lg p-4 text-center">
                  <div className="text-xs text-gray-400">BPM</div>
                  <div className="mt-2 font-semibold text-white">140</div>
                </div>
                <div className="bg-black/30 rounded-lg p-4 text-center">
                  <div className="text-xs text-gray-400">Key</div>
                  <div className="mt-2 font-semibold text-white">A Minor</div>
                </div>
                <div className="bg-black/30 rounded-lg p-4 text-center">
                  <div className="text-xs text-gray-400">Duration</div>
                  <div className="mt-2 font-semibold text-white">3:24</div>
                </div>
                <div className="bg-black/30 rounded-lg p-4 text-center">
                  <div className="text-xs text-gray-400">Plays</div>
                  <div className="mt-2 font-semibold text-white">1,234</div>
                </div>
              </div>
            </div>
          </section>

          {/* About the Producer */}
          <section className="bg-[#0e0e10] rounded-xl p-5 shadow-md">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">About the Producer</h2>
              <button className="px-4 py-2 rounded-md bg-black/40">Follow</button>
            </div>

            <div className="mt-4 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center text-lg font-bold">
                {beat.subtitle?.slice(0, 2).toUpperCase() || "PX"}
              </div>

              <div>
                <div className="font-semibold">{beat.subtitle}</div>
                <div className="text-sm text-gray-400">
                  Professional beat maker specializing in trap and hip-hop production
                </div>
                <div className="mt-2 text-sm text-gray-500">42 Beats · 1.2K Followers</div>
              </div>
            </div>
          </section>
        </main>

        {/* RIGHT SIDEBAR */}
        <aside className="space-y-6">
          {/* Price / License Card */}
          <div className="bg-[#0e0e10] rounded-xl p-6 shadow-md">
            <div className="text-sm text-gray-400">License Price</div>
            <div className="mt-3 text-4xl font-extrabold">{beat.price?.replace("FCFA", "") ?? "2990"}</div>

            <button className="mt-6 w-full py-3 rounded-lg bg-linear-to-r from-pink-500 to-purple-500 text-black font-semibold">
              Purchase License
            </button>

            <button className="mt-3 w-full py-2 rounded-lg border border-gray-700">
              Free Download
            </button>

            <div className="mt-5 border-t border-gray-800 pt-4">
              <div className="font-semibold mb-2">License Includes:</div>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• MP3 & WAV files</li>
                <li>• Stems (individual tracks)</li>
                <li>• Unlimited distribution</li>
                <li>• Commercial use rights</li>
                <li>• Producer tag removed</li>
              </ul>
            </div>
          </div>

          {/* Similar Beats */}
          <div className="bg-[#0e0e10] rounded-xl p-4 shadow-md">
            <h3 className="font-semibold mb-4">Similar Beats</h3>
            <div className="space-y-3">
              {similarBeats.map((s) => (
                <div key={s.id} className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold">
                      🎵
                    </div>
                    <div>
                      <div className="font-medium">{s.title}</div>
                      <div className="text-xs text-gray-400">140 BPM</div>
                    </div>
                  </div>

                  <button
                    onClick={() => navigate(`/beat/${s.id}`)}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-black/30"
                    aria-label={`Play ${s.title}`}
                  >
                    ▶️
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Spacer for alignment on larger screens */}
          <div className="hidden lg:block h-8" />
        </aside>
      </div>
    </div>
  );
}