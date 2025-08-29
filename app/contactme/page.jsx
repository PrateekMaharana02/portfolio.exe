"use client";
import { useState } from "react";
import Footer from "../components/common/Footer";

export default function ContactMe() {
  const [status, setStatus] = useState("");

  // Web3Forms endpoint and access key (replace with your own key)
  const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
  const ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY"; // Replace with your Web3Forms access key

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
    <div className="flex flex-col min-h-screen bg-black text-white">
      <main className="flex-1 flex flex-col justify-center items-center w-full">
        <div className="w-full max-w-lg bg-gradient-to-br from-[#18181b] via-[#23272f] to-[#111113] rounded-2xl shadow-2xl p-8 border border-[#222] mt-8 mb-8 sm:my-16">
          <h1 className="text-3xl font-bold text-center mb-6 text-white">Contact Me</h1>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input type="hidden" name="redirect" value="https://arpitkm.xyz/contactme?success=true" />
            <div>
              <label className="block text-white mb-1" htmlFor="name">Name</label>
              <input
                className="w-full px-4 py-2 rounded-lg bg-white/90 text-black focus:outline-none focus:ring-2 focus:ring-[#FF3B00]"
                type="text"
                id="name"
                name="name"
                required
              />
            </div>
            <div>
              <label className="block text-white mb-1" htmlFor="email">Email</label>
              <input
                className="w-full px-4 py-2 rounded-lg bg-white/90 text-black focus:outline-none focus:ring-2 focus:ring-[#FF3B00]"
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
            <div>
              <label className="block text-white mb-1" htmlFor="message">Message</label>
              <textarea
                className="w-full px-4 py-2 rounded-lg bg-white/90 text-black focus:outline-none focus:ring-2 focus:ring-[#FF3B00]"
                id="message"
                name="message"
                rows={5}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#FF3B00] hover:bg-orange-600 text-white font-semibold rounded-lg transition"
            >
              Send Message
            </button>
          </form>
          {status && <p className="mt-4 text-center text-green-400">{status}</p>}
        </div>
      </main>
      <Footer />
    </div>
  );
}
