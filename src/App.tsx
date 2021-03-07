import React from "react";
import Loader from "./component/Loader";
import BackgroundSlideIn from "./component/BackgroundSlideIn";
import "./asset/BackgroundSlideIn.css";

const App: React.FC = () => {
  return (
    <div className="main-wrapper">
      <div className="background-slide-in-area">
        <BackgroundSlideIn direction="top">TOP</BackgroundSlideIn>
        <BackgroundSlideIn direction="bottom">BOTTOM</BackgroundSlideIn>
      </div>
      <Loader />
    </div>
  );
};

export default App;
