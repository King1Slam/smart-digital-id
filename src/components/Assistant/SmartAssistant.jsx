import { useState } from "react";

const mockQuestions = [
  "What is your full name?",
  "What is your date of birth?",
  "What type of ID would you like to register? (e.g. NRC, Passport, Health ID, Education ID)",
  "Please provide your contact number.",
  "Please upload a supporting document (e.g. birth certificate).",
];

export default function SmartAssistant() {
  const [step, setStep] = useState(0);
  const [responses, setResponses] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const newResponses = [...responses, { q: mockQuestions[step], a: input.trim() }];
    setResponses(newResponses);
    setInput("");
    setStep(step + 1);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">🧠 Smart Assistant</h2>
      <div className="space-y-2">
        {responses.map((pair, idx) => (
          <div key={idx} className="bg-gray-100 p-2 rounded">
            <p className="text-sm text-gray-600">{pair.q}</p>
            <p className="font-medium">{pair.a}</p>
          </div>
        ))}
      </div>

      {step < mockQuestions.length ? (
        <form onSubmit={handleSubmit} className="mt-4">
          <label className="block mb-2 text-gray-700">{mockQuestions[step]}</label>
          <input
            type="text"
            className="w-full border p-2 mb-2"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="bg-blue-500 text-white px-4 py-2">Next</button>
        </form>
      ) : (
        <div className="mt-4 p-4 bg-green-100 text-green-700 rounded">
          ✅ Thank you! Your ID registration details have been collected.
        </div>
      )}
    </div>
  );
}