import React from "react";
import single from "./images/single.png";
import double from "./images/double.png";
import triple from "./images/triple.png";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="max-w-[340px] shadow-xl flex flex-col p-4 m-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={single}
            alt=""
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">Rs.150</p>
          <div className="text-center font-medium">
            <p className="py-2 border- mx-8 mt-8">500GB Storage</p>
            <p className="py-2 border- mx-8 ">1 granted User</p>
            <p className="py-2 border- mx-8 ">Send upto 2GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-2 text-black ">
            Start Trial
          </button>
        </div>
        <div className="max-w-[1240px] shadow-xl flex flex-col p-4 md:my-0 m-8 rounded-lg hover:scale-105 duration-300 bg-gray-100">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={double}
            alt=""
          />
          <h2 className="text-2xl font-bold text-center py-8">Partnership</h2>
          <p className="text-center text-4xl font-bold">Rs.200</p>
          <div className="text-center font-medium">
            <p className="py-2 border- mx-8 mt-8">500GB Storage</p>
            <p className="py-2 border- mx-8 ">1 granted User</p>
            <p className="py-2 border- mx-8 ">Send upto 2GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-2 text-black ">
            Start Trial
          </button>
        </div>
        <div className="max-w-[340px] shadow-xl flex flex-col p-4 m-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={triple}
            alt=""
          />
          <h2 className="text-2xl font-bold text-center py-8">Community</h2>
          <p className="text-center text-4xl font-bold">Rs.150</p>
          <div className="text-center font-medium">
            <p className="py-2 border- mx-8 mt-8">500GB Storage</p>
            <p className="py-2 border- mx-8 ">1 granted User</p>
            <p className="py-2 border- mx-8 ">Send upto 2GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-2 text-black ">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
