import { useState } from "react";
import { IoMusicalNotes, IoPlay, IoDownload, IoSave } from "react-icons/io5";

const CreateSong = () => {
  const [songTitle, setSongTitle] = useState("");
  const [artistName, setArtistName] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [description, setDescription] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [collaborator, setCollaborator] = useState("");
  // Tabs: "beat" or "vocals"
  const [tab, setTab] = useState<"beat" | "vocals">("beat");

  // Audio recorder states
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(
    null
  );
  const [audioURL, setAudioURL] = useState<string | null>(null);
  const [recordingTime, setRecordingTime] = useState(0);
  const [timer, setTimer] = useState<number | null>(null);

  // Start Recording
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);

      const chunks: BlobPart[] = [];

      recorder.ondataavailable = (e) => {
        chunks.push(e.data);
      };

      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: "audio/webm" });
        const url = URL.createObjectURL(blob);
        setAudioURL(url);
      };

      recorder.start();
      setMediaRecorder(recorder);
      setIsRecording(true);

      // Timer
      let sec = 0;
      const interval = window.setInterval(() => {
        sec++;
        setRecordingTime(sec);
      }, 1000);

      setTimer(interval);
    } catch (err) {
      console.error("Mic error:", err);
    }
  };
  // Stop Recording
  const stopRecording = () => {
    mediaRecorder?.stop();
    setIsRecording(false);

    if (timer) window.clearInterval(timer);
    setRecordingTime(0);
  };

  return (
    <div className="min-h-screen bg-[#0d0d0f] text-white p-8 flex justify-center">
      <div className="w-full max-w-7xl">
        {/* HEADER */}
        <h1 className="text-4xl font-bold mb-2">
          Create <span className="text-purple-400">Your Song</span>
        </h1>
        <p className="text-gray-400 mb-10">
          Combine beats with vocals to create your masterpiece
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT SIDE — Main form */}
          <div className="lg:col-span-2 space-y-10">
            {/* SONG INFO */}
            <div className="bg-black/40 border border-gray-800 p-6 rounded-xl">
              <h2 className="text-xl font-semibold mb-1">Song Information</h2>
              <p className="text-gray-400 mb-6">
                Basic details about your song
              </p>

              <div className="space-y-4">
                {/* Title */}
                <div>
                  <label className="block text-gray-300 text-sm mb-1">
                    Song Title
                  </label>
                  <input
                    type="text"
                    placeholder="Midnight Dreams"
                    value={songTitle}
                    onChange={(e) => setSongTitle(e.target.value)}
                    className="w-full p-3 rounded-lg bg-black/30 border border-gray-700 outline-none"
                  />
                </div>

                {/* Artist + Release Date */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm mb-1">
                      Artist Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={artistName}
                      onChange={(e) => setArtistName(e.target.value)}
                      className="w-full p-3 rounded-lg bg-black/30 border border-gray-700 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm mb-1">
                      Release Date
                    </label>
                    <input
                      type="date"
                      value={releaseDate}
                      onChange={(e) => setReleaseDate(e.target.value)}
                      className="w-full p-3 rounded-lg bg-black/30 border border-gray-700 outline-none"
                    />
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-gray-300 text-sm mb-1">
                    Description
                  </label>
                  <textarea
                    placeholder="Tell us about your song..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-3 h-28 rounded-lg bg-black/30 border border-gray-700 outline-none"
                  />
                </div>
              </div>
            </div>

            {/* AUDIO COMPONENTS */}
            <div className="bg-black/40 border border-gray-800 p-6 rounded-xl">
              <h2 className="text-xl font-semibold mb-1">Audio Components</h2>
              <p className="text-gray-400 mb-6">
                Select your beat and add vocals
              </p>

              {/* Tabs */}
              <div className="flex bg-black/30 border border-gray-700 rounded-lg overflow-hidden mb-6">
                <button
                  onClick={() => setTab("beat")}
                  className={`flex-1 py-3 ${
                    tab === "beat" ? "bg-purple-600" : "hover:bg-black/20"
                  }`}
                >
                  Select Beat
                </button>

                <button
                  onClick={() => setTab("vocals")}
                  className={`flex-1 py-3 ${
                    tab === "vocals" ? "bg-purple-600" : "hover:bg-black/20"
                  }`}
                >
                  Add Vocals
                </button>
              </div>

              {/* TAB CONTENT */}
              {tab === "beat" ? (
                /* --- SELECT BEAT UI --- */
                <div>
                  <label className="block text-gray-300 text-sm mb-2">
                    Choose Beat
                  </label>
                  <select className="w-full p-3 rounded-lg bg-black/30 border border-gray-700 outline-none">
                    <option>Select a beat from library</option>
                    <option>Trap Beat #1</option>
                    <option>Afrobeat Loop</option>
                    <option>Dark Piano Beat</option>
                  </select>
                </div>
              ) : (
                /* --- ADD VOCALS UI (FULL RECORDER) --- */
                <div>
                  <p className="text-sm text-gray-300 mb-3">
                    Record your vocals
                  </p>

                  {/* Recording Controls */}
                  <div className="flex items-center gap-4">
                    {!isRecording ? (
                      <button
                        onClick={startRecording}
                        className="px-4 py-2 bg-purple-600 rounded-lg"
                      >
                        🎙 Start Recording
                      </button>
                    ) : (
                      <button
                        onClick={stopRecording}
                        className="px-4 py-2 bg-red-600 rounded-lg"
                      >
                        ⏹ Stop Recording
                      </button>
                    )}

                    {isRecording && (
                      <span className="text-red-400 font-mono">
                        {recordingTime}s
                      </span>
                    )}
                  </div>

                  {/* Playback */}
                  {audioURL && (
                    <div className="mt-4">
                      <p className="text-sm text-gray-300 mb-2">
                        Preview Vocal Recording:
                      </p>
                      <audio controls src={audioURL} className="w-full"></audio>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* LYRICS */}
            <div className="bg-black/40 border border-gray-800 p-6 rounded-xl">
              <h2 className="text-xl font-semibold mb-1">Lyrics</h2>
              <p className="text-gray-400 mb-4">Add your song lyrics</p>

              <textarea
                placeholder="Type or paste your lyrics here..."
                value={lyrics}
                onChange={(e) => setLyrics(e.target.value)}
                className="w-full h-48 p-4 rounded-lg bg-black/30 border border-gray-700 outline-none"
              />
            </div>
          </div>

          {/* RIGHT SIDE — Preview + Actions */}
          <div className="space-y-10">
            {/* PREVIEW */}
            <div className="bg-black/40 border border-gray-800 p-6 rounded-xl">
              <h2 className="text-xl font-semibold mb-3">Preview</h2>
              <p className="text-gray-400 mb-4">
                Song preview will appear here
              </p>

              <div
                className="bg-gradient-to-br from-purple-400 to-pink-500 h-64 rounded-xl
                flex items-center justify-center text-black/70 text-6xl mb-6"
              >
                <IoMusicalNotes />
              </div>

              <button className="w-full py-3 border border-gray-700 rounded-lg flex items-center justify-center gap-2">
                <IoPlay />
                Play Preview
              </button>
            </div>

            {/* ACTIONS */}
            <div className="bg-black/40 border border-gray-800 p-6 rounded-xl space-y-4">
              <button className="w-full py-3 bg-purple-500 rounded-lg flex items-center justify-center gap-2 text-white">
                <IoSave />
                Save Song
              </button>

              <button className="w-full py-3 border border-gray-700 rounded-lg flex items-center justify-center gap-2">
                <IoDownload />
                Export Audio
              </button>

              <button className="w-full py-3 border border-gray-700 rounded-lg">
                Save as Draft
              </button>
            </div>

            {/* COLLABORATORS */}
            <div className="bg-black/40 border border-gray-800 p-6 rounded-xl">
              <h2 className="text-xl font-semibold mb-3">Collaborators</h2>

              <input
                type="text"
                placeholder="Enter username or email"
                value={collaborator}
                onChange={(e) => setCollaborator(e.target.value)}
                className="w-full p-3 rounded-lg bg-black/30 border border-gray-700 outline-none mb-3"
              />

              <button className="w-full py-3 bg-gray-800 rounded-lg">
                Invite
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateSong;
