import React from "react";
import hyrule from "../assets/portfolio/hyrule.JPG";
import tesla from "../assets/portfolio/tesla.JPG";
import todo from "../assets/portfolio/todo.JPG";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      name: "Hyrule Compendium",
      src: hyrule,
      link: "https://unique-baklava-e52212.netlify.app/",
      repo: "https://github.com/alchuu00/zelda-botw-compendium",
    },
    {
      id: 2,
      name: "Tesla Landing Page",
      src: tesla,
      link: "https://alchuu00.github.io/tesla-landing-page-clone/",
      repo: "https://github.com/alchuu00/tesla-landing-page-clone",
    },
    {
      id: 3,
      name: "To Do List",
      src: todo,
      link: "https://gentle-elf-69e434.netlify.app/",
      repo: "https://github.com/alchuu00/to-do-app",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-gr to-gray-800 w-full text-white portfolio h-screen"
    >
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
                  onClick={() => window.open(link, "_blank")}
                >
                  Demo
                </button>
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => window.open(repo, "_blank")}
                >
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
