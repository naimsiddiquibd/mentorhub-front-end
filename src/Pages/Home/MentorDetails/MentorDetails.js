import React, { useState } from "react";
// import mentor from "../../assets/12.jpg";
import { BiLike } from "react-icons/bi";
import { FiMessageSquare } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { MdCall } from "react-icons/md";
import { BiVideo } from "react-icons/bi";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
// import { Link, useLoaderData } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
const tabsData = [
  {
    label: "Overview",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Curabitur non nulla sit amet nisl tempus",
  },
  {
    label: "Location",
    content: "Dhanmondi Dhaka",
  },
  {
    label: "Review",
    content:
      "Ut irure mollit nulla eiusmod excepteur laboris elit sit anim magna tempor excepteur labore nulla.",
  },
  {
    label: "BusinessHours",
    content:
      "Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.",
  },
];
const MentorsDetails = () => {
  const data = useLoaderData();
  console.log(data);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  return (
    <div>
      <div className="w-full h-[120px] bg-[#6e0a23] px-20 pt-2">
        <h2 className="text-md text-gray-200 font-semibold ">
          Home / Mentors Profile{" "}
        </h2>
        <h2 className="text-2xl text-white font-bold ">Mentors Profile </h2>
      </div>
      <div className="w-[80%] my-10 mx-auto bg-slate-50 shadow-xl border-[0.5px] border-dotted border-gray-200 pb-8  px-4 pt-2 rounded-lg">
        <div className="flex justify-between items-start px-4">
          <div className="flex justify-start items-start gap-4 w-[100%]">
            <img className="w-[20%] rounded-sm" src={data.img} alt=""></img>
            <div className="">
              <h2 className="text-slate-800 font-bold text-lg">{data.name}</h2>
              <h2 className="text-gray-400 text-md font-semibold">
                {data.desTitle}
              </h2>
              <div className="flex justify-start items-center gap-2 mt-6">
                <div className="flex justify-start items-center">
                  <AiFillStar className="text-teal-500"></AiFillStar>{" "}
                  <AiFillStar className="text-teal-500"></AiFillStar>{" "}
                  <AiFillStar className="text-teal-500"></AiFillStar>{" "}
                  <AiFillStar className="text-teal-500"></AiFillStar>{" "}
                  <AiFillStar className="text-teal-500"></AiFillStar>
                </div>
                <h2>(25)</h2>
              </div>
              <div className="flex justify-start items-center mr-2 font-semibold text-slate-700">
                <GoLocation></GoLocation>{" "}
                <h2 className="ml-4">{data.location}</h2>
              </div>
            </div>
          </div>

          <div className="w-[30%]">
            <div className="flex justify-start items-center mr-2 font-semibold text-slate-700">
              <BiLike></BiLike> <h2 className="ml-4">40%</h2>
            </div>
            <div className="flex justify-start items-center mr-2 font-semibold my-1 text-slate-700">
              <FiMessageSquare></FiMessageSquare>{" "}
              <h2 className="ml-4">35 Feedback</h2>
            </div>
            <div className="flex justify-start items-center mr-2 font-semibold text-slate-700">
              <GoLocation></GoLocation>{" "}
              <h2 className="ml-4">{data.location}</h2>
            </div>
            <div className="flex justify-start items-center gap-2 my-2">
              <div className="flex justify-center items-center p-1 rounded-md border-slate-300 border-[0.5px] bg-gray-50 text-slate-700 text-lg hover:bg-teal-300 cursor-pointer">
                <BsFillBookmarkCheckFill></BsFillBookmarkCheckFill>
              </div>
              <div className="flex justify-center items-center p-1 rounded-md border-slate-300 border-[0.5px] bg-gray-50 text-slate-700 text-lg hover:bg-teal-300 cursor-pointer">
                <FiMessageSquare></FiMessageSquare>
              </div>
              <div className="flex justify-center items-center p-1 rounded-md border-slate-300 border-[0.5px] bg-gray-50 text-slate-700 text-lg   hover:bg-teal-300 cursor-pointer">
                <MdCall></MdCall>
              </div>
              <div className="flex justify-center items-center p-1 rounded-md border-slate-300 border-[0.5px] bg-gray-50 text-slate-700 text-lg hover:bg-teal-300 cursor-pointer">
                <BiVideo></BiVideo>
              </div>
            </div>
            <button className="bg-teal-500 px-4 py-1 rounded-lg text-xl font-semibold transition hover:-translate-y-1 hover:scale-105 duration-700 ease-in-out shadow-lg text-white">
              Book Now
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 px-20 my-20">
        <div className="flex space-x-3 border-b">
          {/* Loop through tab data and render button for each. */}
          {tabsData &&
            tabsData.map((tab, idx) => {
              return (
                <button
                  key={idx}
                  className={`py-2 border-b-4 transition-colors px-6 font-semibold duration-300 ${
                    idx === activeTabIndex
                      ? "border-teal-500 text-teal-500"
                      : "border-transparent hover:border-gray-200"
                  }`}
                  // Change the active tab on click.
                  onClick={() => setActiveTabIndex(idx)}
                >
                  {tab.label}
                </button>
              );
            })}
        </div>
        {/* Show active tab content. */}
        <div className="py-4 bg-gray-100">
          <p>{tabsData[activeTabIndex].content}</p>
        </div>
      </div>
    </div>
  );
};

export default MentorsDetails;
