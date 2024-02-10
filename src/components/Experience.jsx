import React from "react";

import postgreSQL from "../assets/postgresql.png";
import nestJS from "../assets/nestjs.png";
import javascript from "../assets/js.png";
import reactImage from "../assets/react.png";
import typescript from "../assets/ts.png";
import nextjs from "../assets/nextjs.png";
import docker from "../assets/docker.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/nodejs.png";
import python from "../assets/python.png";
import sass from "../assets/sass.png";
import bootstrap from "../assets/bootstrap.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: nestJS,
      title: "NestJS",
      style: "shadow-red-500",
    },
    {
      id: 2,
      src: postgreSQL,
      title: "PostgreSQL",
      style: "shadow-blue-400",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-300",
    },
    {
      id: 5,
      src: node,
      title: "NodeJs",
      style: "shadow-green-400",
    },
    {
      id: 6,
      src: typescript,
      title: "Typescript",
      style: "shadow-blue-600",
    },
    {
      id: 7,
      src: nextjs,
      title: "Next.js",
      style: "shadow-gray-300",
    },
    {
      id: 8,
      src: docker,
      title: "Docker",
      style: "shadow-blue-400",
    },
    {
      id: 9,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 10,
      src: python,
      title: "Python",
      style: "shadow-yellow-500",
    },
    {
      id: 11,
      src: sass,
      title: "Sass",
      style: "shadow-pink-500",
    },
    {
      id: 12,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-500",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b to-gray-800 from-black w-full experience">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">
            These are the technologies I've worked with and used them in my
            projects.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md py-2 rounded-lg ${style}`}>
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
