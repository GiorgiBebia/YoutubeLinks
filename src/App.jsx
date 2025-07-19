import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

// List of YouTube video IDs
const videoIds = [
  "MNaH0DFtweA",
  "7vxMc8nduFg",
  "SH74B-xU8EU",
  "JG8tQn7J6-E",
  "mj9O8YPdgr4",
  "ZmdVtEH3z_Y",
  "vRUvG_FG5sw",
  "bOYNsSxLzs0",
  "c8YUgRimEdM",
  "CTi1S0l33d4",
  "3CzNyYGBJRE",
  "4OItnnLn-iY",
  "vhLymug7TzY",
  "uzp-9N3KO_Y",
  "1Z-4Rp_3YGg",
  "6gd2LiieSpw",
  "GZJqHjhZa1Q",
  "gdVRNU5PZTo",
  "ZnjPVtyKr_g",
  "bfiTuqboV_0",
  "P2XbeI5f03o",
  "SWohoIqapI8",
  "muwt5XtCFio",
  "hMrbOnOG3ig",
  "gfB468822Kk",
  "NBDait_Q_VQ",
];

// Single Video Player Component
const VideoPlayer = ({ videoId }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [started, setStarted] = useState(false);

  // YouTube embed URL with autoplay, mute, loop
  // Corrected the embedUrl - ensure "https://" prefix is used
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`;

  if (inView && !started) setStarted(true);

  return (
    <div
      ref={ref}
      style={{
        // Adjust width to accommodate 3 videos per row with some spacing
        marginBottom: "20px", // Reduced margin to fit grid better
        minHeight: "200px", // Adjusted min-height for smaller grid items
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        // Add some horizontal margin for spacing between videos
        marginRight: "10px",
        marginLeft: "10px",
      }}
    >
      {started && (
        <iframe
          width="100%"
          // Adjusted height to maintain aspect ratio within the new width
          height="100%"
          src={embedUrl}
          title={`YouTube video ${videoId}`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

// Main Component: List of Videos
const AutoPlayVideoList = () => {
  return (
    <div style={{ margin: "auto", padding: "20px" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center", // Center items in the container
        }}
      >
        {videoIds.map((id, index) => (
          <VideoPlayer key={index} videoId={id} />
        ))}
      </div>
    </div>
  );
};

export default AutoPlayVideoList;