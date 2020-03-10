import React from "react";

export function Track({ artist, title, img }) {
  return (
    <li className="track">
      <img src={img} alt="" />
      <div className="track-content">
        <div className="track-artist">{artist}</div>
        <div className="track-title">{title}</div>
      </div>
    </li>
  );
}
