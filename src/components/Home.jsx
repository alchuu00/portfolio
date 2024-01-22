import React from "react";
import HeroImage from "../assets/Untitled-1.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 home"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 lg:flex-row">
        <div className="small-screen hidden">
          <img
            src={HeroImage}
            alt="profile"
            className="rounded-2xl mx-auto w-1/3 md:w-2/5"
          />
        </div>
        <div className="flex flex-col justify-center h-full">
        <p className="text-gray-500 py-4 max-w-md">Hey, nice to meet you, my name is Alja and I'm a</p>
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Full-Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Helping people turn their ideas into websites and and web applications by iterating quickly and shipping even faster. All while having fun in the proccess!
          </p>

          <div className="portfolio-btn">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r to-red-500 from-orange-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="big-screen">
          <img
            src={HeroImage}
            alt="profile"
            className="rounded-2xl mx-auto ml-64 w-1/5 lg:w-3/5"
          />
        </div>
        <div className="icon-scroll hidden lg:block"></div>
      </div>
    </div>
  );
};

export default Home;
