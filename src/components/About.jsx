import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
          I am a web developer, focused on front-end, but I have also just recently started to explore the world of back-end too.
        </p>

        <br />

        <p className="text-xl">
          During my time working at the hospital, I spent countless late nights
          coding. It was during this period that I built my first web app, and
          it taught me something unexpected about myself. Coding opened up a
          whole new world of creativity that I never knew existed. Through
          building websites and applications, I am able to bring my ideas to
          life and see the concrete results of my hard work. Coding not only
          unleashes my creative side but also sharpens my logical thinking
          skills. The process of designing, coding, and fixing bugs requires
          me to think critically and solve problems, which in turn makes me more
          organized and efficient in my thinking. 
          <br/>
          <br/>
          Overall, coding has become an
          exciting journey of learning and growth for me. It allows me to tap
          into my creativity and shape digital experiences with my own hands.
        </p>
      </div>
    </div>
  );
};

export default About;
