import React from "react";
import { Parallax } from "react-parallax";

const Cover = ({ img, title,description }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageStyle={{height: '650px',width: '9000px'}}
      bgImageAlt="the dog"
      strength={-150}
    >
      <div className="hero h-[500px] border-2">
        <div className="hero-overlay bg-opacity-60 border-2"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5">{description}</p>
          </div>
        </div>
      </div>
      <div style={{ height: "200px" }} />
    </Parallax>
  );
};

export default Cover;
