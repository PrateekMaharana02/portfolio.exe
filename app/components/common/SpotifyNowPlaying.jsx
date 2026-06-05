"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const SpotifyNowPlaying = () => {
  const [song, setSong] = useState(null);

  useEffect(() => {
    let intervalId;
    const fetchSong = () => {
      fetch("/api/spotify")
        .then((res) => res.json())
        .then((data) => {
          if (!data.isPlaying) {
            setSong(null);
          } else {
            setSong(data);
          }
        });
    };
    fetchSong();
    intervalId = setInterval(fetchSong, 15000); // 15 seconds
    return () => clearInterval(intervalId);
  }, []);


  if (!song)
    return (
      <span className="text-white/70">
        Not playing anything on Spotify
      </span>
    );

  return (
    <div className="flex flex-col items-end">
          <span className="text-white/70 text-xs mb-5 font-bold">Prateek is listening to</span>
      <a
        href={song.songUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 group"
      >
        <Image
          src={song.albumImageUrl}
          alt={song.title}
          width={32}
          height={32}
          className="rounded"
        />
        <div className="flex flex-col">
          <span className="text-white text-sm font-medium group-hover:underline">
            {song.title}
          </span>
          <span className="text-white/70 text-xs">{song.artist}</span>
        </div>
      </a>
    </div>
  );
};

export default SpotifyNowPlaying;
