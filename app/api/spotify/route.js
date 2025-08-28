import { NextResponse } from "next/server";
export const revalidate = 0;
const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

async function getAccessToken() {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  return response.json();
}

export async function GET() {
  const { access_token } = await getAccessToken();

  const res = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (res.status === 204 || res.status > 400) {
    return new NextResponse(JSON.stringify({ isPlaying: false }), {
      status: 200,
      headers: { "Cache-Control": "no-store" }
    });
  }

  const song = await res.json();

  if (!song?.is_playing || !song?.item) {
    return new NextResponse(JSON.stringify({ isPlaying: false }), {
      status: 200,
      headers: { "Cache-Control": "no-store" }
    });
  }

  return new NextResponse(JSON.stringify({
    isPlaying: true,
    title: song.item.name,
    artist: song.item.artists?.map((_artist) => _artist.name).join(", "),
    album: song.item.album?.name,
    albumImageUrl: song.item.album?.images?.[0]?.url,
    songUrl: song.item.external_urls?.spotify,
  }), {
    status: 200,
    headers: { "Cache-Control": "no-store" }
  });
}
