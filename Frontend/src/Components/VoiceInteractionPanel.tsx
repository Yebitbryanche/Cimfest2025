import React, { useEffect, useRef, useState } from "react";

interface VoiceInteractionPanelProps {
  speakToScreenReader: (message: string) => void;
}

export default function VoiceInteractionPanel({ speakToScreenReader }: VoiceInteractionPanelProps) {
  /*** Voice Interaction States ***/
  const [isRecording, setIsRecording] = useState(false);
  const [voiceStatus, setVoiceStatus] = useState(
    "Click microphone to start voice input"
  );
  const [amplitude, setAmplitude] = useState(0);

  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const microphoneRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const simulationIntervalRef = useRef<number | null>(null);

  /*** Voice Interaction Handlers ***/
  const analyzeAudio = () => {
    if (!isRecording || !analyserRef.current) return;
    const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
    analyserRef.current.getByteFrequencyData(dataArray);
    const average = dataArray.reduce((sum, val) => sum + val, 0) / dataArray.length;
    const amp = Math.min(average / 256, 1);
    setAmplitude(amp);

    animationFrameRef.current = requestAnimationFrame(analyzeAudio);
  };

  const simulateVoiceInput = () => {
    setIsRecording(true);
    setVoiceStatus("Simulation mode: Speaking detected");
    speakToScreenReader("Voice simulation active");

    let count = 0;
    simulationIntervalRef.current = setInterval(() => {
      const amp = Math.random() * 0.8 + 0.2;
      setAmplitude(amp);
      count++;
      if (count > 20) stopVoiceRecognition();
    }, 500) as unknown as number;
  };

  const stopVoiceRecognition = () => {
    setIsRecording(false);
    setAmplitude(0);
    setVoiceStatus("Voice input stopped");
    speakToScreenReader("Voice input stopped");

    if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    if (simulationIntervalRef.current) clearInterval(simulationIntervalRef.current);
    if (microphoneRef.current) {
      microphoneRef.current.mediaStream.getTracks().forEach(track => track.stop());
      microphoneRef.current.disconnect();
    }
    if (audioContextRef.current) audioContextRef.current.close();
    audioContextRef.current = null;
    analyserRef.current = null;
  };
  
  const startVoiceRecognition = async () => {
    try {
      setVoiceStatus("Requesting microphone access...");
      speakToScreenReader("Requesting microphone access");

      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false,
      });
      audioContextRef.current = new (window.AudioContext ||
        (window as any).webkitAudioContext)();
      analyserRef.current = audioContextRef.current.createAnalyser();
      microphoneRef.current = audioContextRef.current.createMediaStreamSource(stream);
      microphoneRef.current.connect(analyserRef.current);

      setIsRecording(true);
      setVoiceStatus("Listening... Speak now!");
      speakToScreenReader("Microphone active. Listening for voice input");
      analyzeAudio();
    } catch (err) {
      console.error(err);
      setVoiceStatus("Microphone access denied. Using simulation mode.");
      simulateVoiceInput();
    }
  };

  const toggleVoiceRecognition = () => {
    if (isRecording) stopVoiceRecognition();
    else startVoiceRecognition();
  };

  // Cleanup effect
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      if (simulationIntervalRef.current) clearInterval(simulationIntervalRef.current);
      if (microphoneRef.current) {
        microphoneRef.current.mediaStream.getTracks().forEach(track => track.stop());
        microphoneRef.current.disconnect();
      }
      if (audioContextRef.current) audioContextRef.current.close();
    };
  }, []);


  return (
    <section className="bg-gray-900 rounded-xl p-6 border border-purple-600 shadow-lg flex flex-col items-center w-full">
      <h2 className="text-xl font-semibold mb-4 text-center text-white">
        Voice Interaction Visualizer
      </h2>
      <div
        className={`w-48 h-48 rounded-full flex items-center justify-center border-4 border-purple-600 cursor-pointer transition-all ${
          isRecording ? "animate-pulse shadow-[0_0_40px_rgba(0,100,255,0.8)]" : ""
        }`}
        onClick={toggleVoiceRecognition}
        role="button"
        tabIndex={0}
        aria-label={
          isRecording
            ? "Microphone active. Click to stop recording"
            : "Microphone for voice input. Click to start recording"
        }
        onKeyPress={e => (e.key === "Enter" || e.key === " ") && toggleVoiceRecognition()}
      >
        <div className="text-4xl text-purple-600">{isRecording ? "🎙️" : "🎤"}</div>
      </div>

      <div className="w-full h-5 bg-gray-700 rounded mt-4 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-purple-600 to-purple-400 transition-all"
          style={{ width: `${amplitude * 100}%` }}
        ></div>
      </div>

      <div className="mt-2 text-white">{voiceStatus}</div>

      <div className="flex flex-wrap gap-4 justify-center mt-4 w-full">
        <button
          className="px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-500 text-white transition disabled:opacity-50"
          disabled={isRecording}
          onClick={startVoiceRecognition}
        >
          Start Voice Input
        </button>
        <button
          className="px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-500 text-white transition disabled:opacity-50"
          disabled={!isRecording}
          onClick={stopVoiceRecognition}
        >
          Stop Voice Input
        </button>
        <button
          className="px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-500 text-white transition disabled:opacity-50"
          disabled={isRecording}
          onClick={simulateVoiceInput}
        >
          Simulate Voice
        </button>
      </div>
    </section>
  );
}