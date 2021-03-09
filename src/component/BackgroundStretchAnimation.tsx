import React, { useState } from "react";
import "../asset/BackgroundStretchAnimation.css";

const BackgroundStretchAnimation: React.FC = () => {
  const [stretch, showStretch] = useState(false);

  return (
    <>
      <div
        className="splashbg"
        style={{
          transform: stretch
            ? "translateX(-300%) skewX(-45deg)"
            : "translateX(300%) skewX(-45deg)",
        }}
      ></div>
      <button
        onClick={() => {
          showStretch(!stretch);
        }}
      >
        stretch
      </button>
    </>
  );
};

export default BackgroundStretchAnimation;
