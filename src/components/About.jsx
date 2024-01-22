import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white about">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
          I have a year of experience working as a freelance web developer, and
          my approach is all about simplicity and effectiveness. When I team up
          with clients, I delve into their needs, turning complex ideas into
          clear plans for their websites. Communication is key, and I make sure
          everyone is in the loop every step of the way!
        </p>
        <p className="text-xl">
          <br />
          I don't just work solo. I thrive as part of bigger project teams,
          seamlessly syncing up with designers, marketers, and fellow
          developers. Whether it's the initial planning, design stages, or the
          coding phase, I'm all about making everything mesh smoothly.
          <br />
          <br />
          What makes me stand out? It's not just technical know-how – I pride
          myself on keeping things straightforward and getting the job done
          right. I specialize in building and iterating quickly, so we not only
          deliver what clients want but also reassess and refine for a perfect
          fit.
          <br />
          <br />
          If you're seeking a developer who communicates clearly, works
          efficiently, and adapts swiftly, shoot me an email!
        </p>
      </div>
    </div>
  );
};

export default About;
