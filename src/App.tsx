import React from "react";
import Loader from "./component/Loader";
import BackgroundVerticalSlideIn from "./component/BackgroundVerticalSlideIn";
import BackgroundHorizontalSlideIn from "./component/BackgroundHorizontalSlideIn";
import "./asset/BackgroundSlideIn.css";

const App: React.FC = () => {
  return (
    <div className="main-wrapper">
      <div className="background-slide-in-area">
        <BackgroundVerticalSlideIn direction="top">
          TOP
        </BackgroundVerticalSlideIn>
        <BackgroundVerticalSlideIn direction="bottom">
          BOTTOM
        </BackgroundVerticalSlideIn>
        <BackgroundHorizontalSlideIn direction="left">
          LEFT
        </BackgroundHorizontalSlideIn>
        <BackgroundHorizontalSlideIn direction="right">
          RIGHT
        </BackgroundHorizontalSlideIn>
      </div>
      <Loader />
    </div>
  );
};

export default App;
