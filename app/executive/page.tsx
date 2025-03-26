"use client";
import { useState } from "react";

export default function ChatPage() {
  const [question, setQuestion] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!question) return;
    setLoading(true);
    setReply("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      const data = await response.json();
      setReply(data.reply || "No response from AI.");
    } catch (error: any) {
      console.error("Error connecting to AI:", error);  // Log the error here
      setReply("Error connecting to AI.");
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Chat with AI</h1>
        <textarea
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Ask me anything..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button
          onClick={sendMessage}
          className="mt-3 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition-all"
          disabled={loading}
        >
          {loading ? "Generating..." : "Send"}
        </button>
        {reply && (
          <div className="mt-4 p-3 border rounded-md bg-gray-50">
            <strong>AI:</strong> {reply}
          </div>
        )}
      </div>
    </div>
  );
}







