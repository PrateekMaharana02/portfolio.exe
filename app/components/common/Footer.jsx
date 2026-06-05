"use client";

import React, { useState } from "react";
import Link from "next/link";
import socialLinks from "../../content/socialLinks";
import { MdEmail } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import CopyEmail from "./CopyEmail";


import SpotifyNowPlaying from "./SpotifyNowPlaying";

const Footer = () => {
  return (
    <footer className="relative mx-auto mt-14 mb-8 sm:mb-12 max-w-5xl px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF3B00] to-transparent" />

      <div className="py-8 sm:py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-sm sm:text-base md:text-lg tracking-wider uppercase font-medium text-white mb-3 sm:mb-4">
            Connect ME :
          </h3>
          <div className="flex flex-col space-y-2 w-full">
            {socialLinks.map((social, i) => (
              <Link
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="flex items-center text-white hover:text-[#FF3B00] transition-colors duration-200 transform hover:scale-110"
              >
                {React.cloneElement(social.icon, { size: "1.25rem" })}
                <span className="ml-2 text-sm font-bold">{social.name}</span>
              </Link>
            ))}
            <CopyEmail />
          </div>
        </div>
        <div className="flex justify-center md:justify-end items-center">
          
          <SpotifyNowPlaying />
        </div>
      </div>

      <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-[#333] flex flex-col sm:flex-row justify-between items-center">
        <p className="text-white/80 mb-3 sm:mb-0 text-sm sm:text-base">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="https://x.com/PrateekM2706"
            className="inline-flex items-center space-x-1 text-white/85 hover:text-[#FF3B00] transition-colors duration-200 group"
          >
            <span className="text-sm sm:text-base">
              Brought to you by Prateek.
            </span>
            <GoArrowUpRight
              size={16}
              className="text-[#FF3B00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
            />
          </Link>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
