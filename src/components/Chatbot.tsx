import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { chatbotResponses } from "@/data/content";

interface Message { text: string; isBot: boolean }

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi! 👋 I'm your Biology study buddy. Ask me about cells, tissues, or any topic!", isBot: true },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages((p) => [...p, { text: userMsg, isBot: false }]);
    setInput("");

    const lower = userMsg.toLowerCase();
    const matchedKey = Object.keys(chatbotResponses).find((key) => lower.includes(key));
    const response = matchedKey
      ? chatbotResponses[matchedKey]
      : "I'm not sure about that. Try asking about: cells, tissues, nucleus, mitochondria, xylem, phloem, chloroplast, or other biology topics! 🔬";

    setTimeout(() => setMessages((p) => [...p, { text: response, isBot: true }]), 500);
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gradient-chatbot shadow-elevated flex items-center justify-center"
      >
        {open ? <X className="w-6 h-6 text-chatbot-foreground" /> : <MessageCircle className="w-6 h-6 text-chatbot-foreground" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-card rounded-2xl shadow-elevated overflow-hidden border border-border"
          >
            <div className="gradient-chatbot px-4 py-3">
              <h3 className="font-heading font-bold text-chatbot-foreground">🧬 Bio Buddy</h3>
              <p className="text-chatbot-foreground/80 text-xs font-body">Ask me anything about biology!</p>
            </div>
            <div className="h-72 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}>
                  <div className={`max-w-[80%] px-3 py-2 rounded-xl text-sm font-body ${
                    msg.isBot ? "bg-muted text-foreground" : "bg-chatbot text-chatbot-foreground"
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>
            <div className="p-3 border-t border-border flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Type your question..."
                className="flex-1 px-3 py-2 rounded-lg border border-border bg-card text-foreground text-sm font-body"
              />
              <button onClick={sendMessage} className="w-9 h-9 rounded-lg gradient-chatbot flex items-center justify-center">
                <Send className="w-4 h-4 text-chatbot-foreground" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
