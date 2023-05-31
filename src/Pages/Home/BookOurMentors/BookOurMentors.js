import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import { AiFillStar, AiOutlineUser } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import "swiper/css";
// import required modules
import sampleImg from "../../../Assets/user.png";
import { Navigation } from "swiper";
import { A11y } from "swiper";
import "swiper/css/scrollbar";
// Import Swiper React components
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

// import { HiOutlineClipboardCheck } from "react-icons/hi";
import Aos from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosCheckmarkCircle, IoMdTime } from "react-icons/io";

const BookOurMentors = () => {
    // const { data: mentor = [], refetch } = useQuery({
  const { data: mentor = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        "https://product-sell-server.vercel.app/users/seller"
      );
      const data = await res.json();
      console.log(data);
      return data;
    },
  });
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className=" flex py-20 lg:flex-row bg-slate-200/60 flex-col px-10 gap-6 items-start ">
      <div className="lg:w-[30%] mr-6 w-ful">
        {" "}
        <div className="">
          <h3
            data-aos="fade-right"
            className="text-[2rem] font-bold text-[#650006]"
          >
            Book Our Mentors
          </h3>
          <h3
            data-aos="fade-up"
            className="text-md font-semibold mt-4 text-slate-600"
          >
            One to one session to get personalized guidance
          </h3>

          <h3
            data-aos="fade-up"
            className="text-sm font-semibold mt-4 text-slate-600"
          >
            Find your perfect mentor in just a few clicks. Our easy-to-use
            search feature lets you find a mentor who matches your specific
            needs and requirements. Search by sector, experience level,
            expertise, and more to find the perfect match.{" "}
          </h3>
          <h3
            data-aos="fade-up"
            className="text-sm font-semibold mt-4 text-slate-600"
          >
            Once you've found the right mentor, it's easy to book a session. Our
            platform lets you schedule a session with your mentor and process
            payments securely and efficiently.
          </h3>
        </div>
      </div>

      <div className="lg:w-[68%] w-full">
        <section className="  ">
          {/* <Card /> */}
          <Swiper
            className=""
            slidesPerview={1}
            spaceBetween={15}
            breakpoints={{
              850: {
                slidesPerView: 3,
              },
            }}
            navigation={true}
            modules={[Navigation, A11y]}
          >
            {mentor.map(
              ({
                _id,
                img,
                desTitle,
                name,
                location,
                time,
                price,
                verification,
                review,
              }) => {
                return (
                  <SwiperSlide className="">
                    <div className="max-w-xs rounded-md shadow-lg px-4 bg-white py-4 ">
                      {img ? (
                        <img
                          src={img}
                          alt=""
                          className="object-cover object-center w-full h-[150px] mx-auto rounded-lg  "
                        />
                      ) : (
                        <img
                          src={sampleImg}
                          alt=""
                          className="object-cover object-center w-[150px] h-[150px] mx-auto rounded-lg  "
                        />
                      )}

                      <div className="flex mt-3 justify-start items-center text-[#801d34] font-bold text-xl gap-2">
                        <h2>{name}</h2>
                        {verification ? (
                          <IoIosCheckmarkCircle className="text-green-500"></IoIosCheckmarkCircle>
                        ) : (
                          ""
                        )}
                      </div>
                      <h2 className="my-2 text-[#9F0E31] font-semibold text-md">
                        {desTitle}
                      </h2>
                      <div className="flex justify-start items-center gap-2 ">
                        <div className="flex text-yellow-500 justify-start items-center">
                          <AiFillStar></AiFillStar>
                          <AiFillStar></AiFillStar>
                          <AiFillStar></AiFillStar>
                          <AiFillStar></AiFillStar>
                          <AiFillStar></AiFillStar>
                        </div>
                        <h2 className="text-[#9F0E31]"> ({review})</h2>
                      </div>
                      <div className="flex justify-start items-center gap-2 text-slate-500 mt-2">
                        <IoLocationSharp></IoLocationSharp>
                        <h2 className="text-sm ">{location}</h2>
                      </div>
                      <div className="flex justify-start items-center gap-2 my-1 text-slate-500">
                        <IoMdTime></IoMdTime>
                        <h2 className="text-sm ">Available on {time}</h2>
                      </div>
                      <div className="flex justify-start items-center gap-2 my-1 text-slate-500">
                        <IoMdTime></IoMdTime>
                        <h2 className="text-sm ">Available on {time}</h2>
                      </div>
                      <div className=" grid :lg-grid-cols-2 md:grid-cols-2 grid-cols-1  mt-3 gap-2">
                        <Link to={`/users/${_id}`}>
                          <button class="bg-transparent hover:bg-[#9d1635] text-sm text-[#a11838] font-semibold hover:text-white py-1 px-3 border border-[#9F0E31] hover:border-transparent rounded">
                            View Details
                          </button>
                        </Link>
                        <button class="bg-[#a51638] hover:bg-[#942b43] text-sm text-white font-bold py-1 px-3 rounded">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              }
            )}
          </Swiper>
        </section>
      </div>
    </div>
  );
};

export default BookOurMentors;
