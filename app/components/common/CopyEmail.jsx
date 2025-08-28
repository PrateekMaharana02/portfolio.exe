"use client";
import React, { useState } from "react";
import { MdEmail } from "react-icons/md";

const EMAIL = "arpitkm2103@gmail.com";

const CopyEmail = () => {
  const [copied, setCopied] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      className="mt-4 flex items-center text-sm font-bold text-white break-all focus:outline-none relative group"
      onClick={handleCopy}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      type="button"
      aria-label="Copy email"
    >
      <MdEmail className="mr-2" size={18} />
      {EMAIL}
      <span className={`absolute left-0 top-full mt-1 px-2 py-1 rounded bg-black text-white text-xs whitespace-nowrap transition-opacity duration-200 ${hovered || copied ? 'opacity-100' : 'opacity-0'} z-10`}>
        {copied ? 'Copied!' : 'Click to copy'}
      </span>
    </button>
  );
};

export default CopyEmail;