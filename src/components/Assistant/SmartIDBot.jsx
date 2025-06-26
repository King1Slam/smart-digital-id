import { useState } from "react";

const responses = {
  default: "🤖 I'm your Smart ID Assistant. Ask me about NRC, Passport, UDIN, or how to register!",
  nrc: "To register for an NRC, go to the Register page and fill in your details. A UDIN will be generated.",
  passport: "Passport registration requires NRC and a passport photo. Feature coming soon!",
  udin: "Your UDIN (Unified Digital Identity Number) connects all your IDs across departments.",
  help: "I can help with: NRC registration, Passport info, Document uploads, UDIN, and more. Just ask!"
};

export default function SmartIDBot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { sender: "bot", text: responses.default }
  ]);

  const handleSend = () => {
    const userInput = input.toLowerCase();
    const matchedKey = Object.keys(responses).find(key => userInput.includes(key)) || "default";
    const botReply = responses[matchedKey];

    setMessages([...messages, { sender: "user", text: input }, { sender: "bot", text: botReply }]);
    setInput("");
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">🤖 Smart ID Assistant Bot</h2>
      <div className="bg-gray-100 p-4 h-64 overflow-y-auto rounded mb-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`my-2 p-2 rounded ${
              msg.sender === "bot" ? "bg-blue-100 text-blue-900" : "bg-green-100 text-green-900 text-right"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex space-x-2">
        <input
          className="flex-1 border p-2 rounded"
          placeholder="Ask me about NRC, Passport, UDIN..."
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
}