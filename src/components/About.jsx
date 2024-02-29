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
          with clients, I pay attention to their needs, turning complex ideas
          into clear plans. Communication is key, and I make sure everyone is in
          the loop every step of the way!
        </p>
        <p className="text-xl">
          <br />
          While I enjoy discovering and learning new technologies, I am also
          passionate about Developer Experience and Developer Productivity since
          I believe how we organize our work is just as important (if not more)
          than choosing the right tech stack.
          <br />
          <br />
          I can support your team as a freelance software engineer, primarily
          within the JavaScript/TypeScript ecosystem but I am always open to
          working with new technologies. I prefer progress over perfection and
          enjoy building prototypes, releasing MVPs, and shipping things fast.
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
