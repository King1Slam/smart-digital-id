import { useState, useRef } from "react";

export default function VoiceInput() {
  const [transcript, setTranscript] = useState("");
  const recognitionRef = useRef(null);

  const startListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("❌ Your browser does not support Speech Recognition.");
      return;
    }
    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.continuous = false;
    recognitionRef.current.lang = "en-US";
    recognitionRef.current.onresult = (event) => {
      const result = event.results[0][0].transcript;
      setTranscript(result);
      localStorage.setItem("voice_input", result);
      alert("🎤 Voice captured & stored locally.");
    };
    recognitionRef.current.start();
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">🔊 Voice Input</h2>
      <button onClick={startListening} className="bg-purple-500 text-white px-4 py-2 rounded">
        Start Voice Input
      </button>
      {transcript && <p className="mt-2">🎙️ Captured: {transcript}</p>}
    </div>
  );
}