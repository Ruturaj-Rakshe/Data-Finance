import React from "react";
import laptop from "./images/laptop.png";

const Analytics = () => {
  return (
    //Parent Container
    <div className="w-full bg-white py-16 px-4 ">
      <div className="max-w[1240px] mx-auto grid md: grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={laptop} alt="" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold md:text-5xl sm:text-6xl text-4xl">
            DATA ANALYTICS DASHBOARD
          </p>

          <h1 className="justify-center font-bold py-2 text-3xl">
            Manage Data Analytics Centrally
          </h1>

          <p>
            This line sets the sortingField property of the column object. The
            value is a string that matches the column's id (e.g.,
            "column1","column2", etc.). This is typically used to specify the
            field by which the column should be sorted.
          </p>
          <button className="bg-[#00df9a] w-[140px] rounded-md font-medium my-6 mx-auto px-6 py-2 text-black ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
