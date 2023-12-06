import React from "react";
import auctionbay from "../assets/portfolio/auctionbay.jpg";
import wanderlust from "../assets/portfolio/wanderlust.jpg";
import yttranscript from "../assets/portfolio/yttranscript.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      name: "AuctionBay App",
      src: auctionbay,
      link: "https://drive.google.com/file/d/1-bfEb21509mi2e_YERvpwfb4Q2HnXtnP/view?usp=sharing",
      repo: "https://github.com/alchuu00/auctionbay-app-backend",
    },
    {
      id: 2,
      name: "Youtube Transcript Generator",
      src: yttranscript,
      link: "https://github.com/alchuu00/Youtube-Transcript-App/tree/main",
      repo: "https://github.com/alchuu00/Youtube-Transcript-App/tree/main",
    },
    {
      id: 3,
      name: "Wanderlust App",
      src: wanderlust,
      link: "https://dashing-praline-1c6094.netlify.app/",
      repo: "https://github.com/alchuu00/wanderlust-app/",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white portfolio h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, name, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200"
              />
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => window.open(link, "_blank")}>
                  Demo
                </button>
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => window.open(repo, "_blank")}>
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
