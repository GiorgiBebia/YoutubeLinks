import React, { useState, useEffect } from "react";

// Your list of YouTube video IDs
const playlistIds = [
  "MNaH0DFtweA", "7vxMc8nduFg", "SH74B-xU8EU", "JG8tQn7J6-E", "mj9O8YPdgr4",
  "ZmdVtEH3z_Y", "vRUvG_FG5sw", "bOYNsSxLzs0", "c8YUgRimEdM", "CTi1S0l33d4",
  "3CzNyYGBJRE", "4OItnnLn-iY", "vhLymug7TzY", "uzp-9N3KO_Y", "1Z-4Rp_3YGg",
  "6gd2LiieSpw", "GZJqHjhZa1Q", "gdVRNU5PZTo", "ZnjPVtyKr_g", "bfiTuqboV_0",
  "P2XbeI5f03o", "SWohoIqapI8", "muwt5XtCFio", "hMrbOnOG3ig", "gfB468822Kk",
  "NBDait_Q_VQ",
];

// Shuffle function
const shuffleArray = (array) => {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

// Single shuffled video player
const ShuffledVideoPlayer = () => {
  const [videoId, setVideoId] = useState("");
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    const shuffled = shuffleArray(playlistIds);
    setVideoId(shuffled[0]);
    setPlaylist(shuffled.slice(1));
  }, []);

  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${playlist.join(",")}&vq=small`;

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "360px",
        margin: "10px",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
      }}
    >
      {videoId && (
        <iframe
          width="100%"
          height="200"
          src={embedUrl}
          title="Shuffled YouTube Player"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

// Group of 3 players
const ShuffledPlaylistGroup = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <ShuffledVideoPlayer />
      <ShuffledVideoPlayer />
      <ShuffledVideoPlayer />
      <ShuffledVideoPlayer />
      <ShuffledVideoPlayer />
      <ShuffledVideoPlayer />
      <ShuffledVideoPlayer />
      <ShuffledVideoPlayer />
      <ShuffledVideoPlayer />
      <ShuffledVideoPlayer />
    </div>
  );
};

export default ShuffledPlaylistGroup;
