import React, { useState, useRef } from "react";
import { useHover } from "../hooks/useHover";
import "../asset/App.css";

interface IProps {
  direction?: "left" | "right";
}

const BackgroundVerticalSlideIn: React.FC<IProps> = (props) => {
  const [open, setOpen] = useState(false);
  const node = useRef(null);
  const hover = useHover(node);

  return (
    <>
      <div
        className="top-bottom"
        style={{
          transform: open ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: `center ${props.direction}`,
        }}
      ></div>
      <div className="animation-button">
        <div
          className="animation-button-bg"
          style={{
            transform: hover ? "scaleX(1)" : "scaleX(0)",
          }}
        ></div>
        <button
          ref={node}
          onClick={() => {
            setOpen(true);
            setTimeout(() => {
              setOpen(false);
            }, 5000);
          }}
        >
          {props.children}
        </button>
      </div>
    </>
  );
};

export default BackgroundVerticalSlideIn;
