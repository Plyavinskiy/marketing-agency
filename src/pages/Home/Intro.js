import React from "react";

const Intro = () => {
  return (
    <div className="grid grid-cols-2 h-screen items-center">
      <div className="flex flex-col space-y-10">
        <h1 className="text-7xl font-semibold text-primary">
          The best <br />
          <b className="text-secondary">marketing</b>
        </h1>
        <h2 className="text-5xl font-semibold text-primary">
          Doesn't feel like marketing
        </h2>
        <button className="px-16 py-5 bg-secondary text-xl text-white max-w-max hover:bg-primary">
          Get Started
        </button>
      </div>
      <div className="p-10">
        <lottie-player
          src="https://assets10.lottiefiles.com/packages/lf20_hwcplx4x.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
  );
};

export default Intro;
