"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatbotWeb3Form() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("");

  const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
  const ACCESS_KEY = "b9bcbf84-f2e9-4fab-b7d1-e508c77de6f9"; // Replace with your Web3Forms access key

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("access_key", ACCESS_KEY);
    setStatus("Sending...");
    const res = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      body: formData,
    });
    const result = await res.json();
    if (result.success) {
      setStatus("Thank you for reaching out! I'll get back to you soon.");
      e.target.reset();
    } else {
      setStatus("Something went wrong. Please try again later.");
    }
  };

  return (
    <>
      {/* Floating Chatbot Button */}
      
        
      {/* Chatbot Modal with Animation, positioned above the button */}
      <AnimatePresence>
        {open && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
                className="bg-gradient-to-br from-[#18181b] via-[#23272f] to-[#111113] w-full max-w-sm rounded-t-2xl sm:rounded-2xl shadow-2xl p-4 border border-[#222] relative"
                style={{ maxWidth: 420 }}
              >
              <button
                onClick={() => { setOpen(false); setStatus(""); }}
                className="absolute top-3 right-3 text-white hover:text-[#FF3B00] text-3xl font-bold focus:outline-none"
                aria-label="Close Chatbot"
              >
                ×
              </button>
              <div className="flex flex-col items-center mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FF3B00] to-[#23272f] flex items-center justify-center mb-2 shadow-lg">
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="white"/><path d="M8 10h8M8 14h5" stroke="#FF3B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="11" stroke="#FF3B00" strokeWidth="2"/></svg>
                </div>
                <h2 className="text-2xl font-bold text-center text-white">Contact Me</h2>
                
              </div>
              <form onSubmit={handleSubmit} className="space-y-5 mt-2">
                <input type="hidden" name="redirect" value="https://arpitkm.xyz/contactme?success=true" />
                <div>
                  <label className="block text-white mb-1 font-medium" htmlFor="name">Name</label>
                  <input
                    className="w-full px-4 py-2 rounded-lg bg-white/90 text-black focus:outline-none focus:ring-2 focus:ring-[#FF3B00] placeholder-gray-400"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white mb-1 font-medium" htmlFor="email">Email</label>
                  <input
                    className="w-full px-4 py-2 rounded-lg bg-white/90 text-black focus:outline-none focus:ring-2 focus:ring-[#FF3B00] placeholder-gray-400"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white mb-1 font-medium" htmlFor="message">Message</label>
                  <textarea
                    className="w-full px-4 py-2 rounded-lg bg-white/90 text-black focus:outline-none focus:ring-2 focus:ring-[#FF3B00] placeholder-gray-400 resize-none"
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Type your message..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-[#FF3B00] hover:bg-orange-600 text-white font-semibold rounded-lg shadow-md transition flex items-center justify-center gap-2"
                >
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M2 21l21-9-21-9v7l15 2-15 2v7z" fill="white"/></svg>
                  Send Message
                </button>
              </form>
              {status && <p className="mt-4 text-center text-green-400">{status}</p>}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
