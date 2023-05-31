import React, { useState } from "react";
// import Data from "../../../Data/Data";
import { IoMdTime } from "react-icons/io";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
const BlogSection = () => {
  const { data: blogs = [], refetch } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await fetch("https://product-sell-server.vercel.app/blog");
      const data = await res.json();
      console.log(data);
      return data;
    },
  });
  console.log(blogs);

  const [expandedPostIds, setExpandedPostIds] = useState([]);

  const toggleExpand = (postId) => {
    setExpandedPostIds((prevExpandedPostIds) => {
      if (prevExpandedPostIds.includes(postId)) {
        return prevExpandedPostIds.filter((id) => id !== postId);
      } else {
        return [...prevExpandedPostIds, postId];
      }
    });
  };

  return (
    <div className="my-8 lg:px-20 px-8">
      <div className="my-10">
        <h2 className="text-center text-4xl font-bold text-[#650006]">
          Blogs and News
        </h2>
        <h2 className="text-xl text-[#220109] font-semibold text-center w-[60%] mx-auto">
          Learn more about yourself and grow more
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 cursor-pointer">
        {blogs.map((data) => (
          <div
            key={data._id}
            data={data}
            className="max-w-sm rounded-md shadow-md p-3 bg-white py-1 "
          >
            <img
              src={data.img}
              alt=""
              className="object-cover object-center mx-auto h-[260px] w-[100%] rounded-lg  "
            />

            <div className="flex mt-3 justify-start items-center text-[#801d34] font-bold text-xl gap-2">
              <h2>{data.blogCategory}</h2>
            </div>
            <div className="flex justify-start items-center gap-2 my-1 text-slate-500">
              <IoMdTime></IoMdTime>
              <h2 className="text-sm ">{data.time}</h2>
            </div>

            <h2 className="text-gray-800 font-semibold text-sm my-2">
              {data.notice.split(" ").slice(0, 13).join(" ")}...{" "}
              <Link to={`/post/${data._id}`}>
                <strong>See more</strong>
              </Link>
            </h2>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center my-4">
        <button className="bg-transparent transition hover:-translate-y-1 hover:scale-105 duration-700 ease-in-out shadow-lg border-[2px] border-[#d63131] rounded-lg px-4 py-2 text-slate-600 hover:bg-teal-50 hover:text-[#98242C] font-bold">
          <Link to="\blog"> View All</Link>
        </button>
      </div>
    </div>
  );
};
export default BlogSection;
