import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
        <p className="text-[#00df9a] font-bold p-2 ">
          GROWING WITH CYBERSECURITY
        </p>
        <h1 className="font-bold md:text-7xl sm:text-6xl text-4xl md:py-6">
          Welcome to Gearsec.
        </h1>
        <div className="display flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold ">
            Fast, Flexible financing for
          </p>
          <Typewriter
            className="md:text-8xl sm:text-4xl text-6xl font-bold pl-2"
            options={{
              strings: ["BTB", "BTC", "SaaS"],
              autoStart: true,
              loop: true,
              wrapperClassName: "md:text-5xl sm:text-6xl text-xl pl-2",
            }}
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-400 py-4">
          Monitor your data analytics to increase revenue for BTB, BTC & SaaS
          platforms.
        </p>
        <button className="bg-[#00df9a] w-[140px] rounded-md font-medium my-6 mx-auto px-6 py-2 text-black ">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
