import React from "react";
import auctionbay from "../assets/portfolio/auctionbay.jpg";
import resumivise from "../assets/portfolio/resumivise.jpg";
import yttranscript from "../assets/portfolio/yttranscript.jpg";
import waniskaw from "../assets/portfolio/waniskaw.jpg";
import twai from "../assets/portfolio/twai.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      name: "AuctionBay App",
      src: auctionbay,
      link: "https://auctionbay.netlify.app/",
      repo: "https://github.com/alchuu00/auctionbay-app-frontend",
    },
    {
      id: 2,
      name: "Resumivise",
      src: resumivise,
      link: "https://resumivise.onrender.com/",
      repo: "https://github.com/PooriaT/Resumivise",
    },
    {
      id: 3,
      name: "Youtube Transcript Generator",
      src: yttranscript,
      link: "https://drive.google.com/file/d/1l5wiTLFVKYK1hc81gFwvAsAGdycVLf0H/view?usp=sharing",
      repo: "https://github.com/alchuu00/Youtube-Transcript-App/tree/main",
    },
    {
      id: 4,
      name: "Waniskaw Foundation",
      src: waniskaw,
      link: "https://www.waniskaw.ca/",
      repo: "",
    },
    {
      id: 5,
      name: "Tech Writter AI",
      src: twai,
      link: "https://www.techwriterai.com/",
      repo: "",
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
          {portfolios.map(({ id, name, src, link, repo }, index) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 h-36 w-full object-cover"
              />
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110"
                  onClick={() => window.open(link, "_blank")}>
                  Link
                </button>
                {portfolios.length - index > 2 && (
                  <button
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110"
                    onClick={() => window.open(repo, "_blank")}>
                    GitHub
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
