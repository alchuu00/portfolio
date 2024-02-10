import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Andraž",
      stars: 5,
      testimonial:
        "Collaborating with Alja is easy, efficient and precise. But the reason why I love to work with her is because of her character and ideas that she has.",
    },
    {
      name: "Riley",
      stars: 5,
      testimonial:
        "Alja went above and beyond! She kept me informed at every stage of the project, making our collaboration smooth and stress-free. I highly recommend her!",
    },
  ];

  const Star = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#FFAA00"
      className="w-4 h-4 inline-block mr-1"
      viewBox="0 0 16 16">
      <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" />
    </svg>
  );

  return (
    <div
      name="testimonials"
      className="bg-gradient-to-b to-black from-gray-800 w-full text-white portfolio h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Testimonials
          </p>
          <p className="py-6">Read what my satisfied clients have to say</p>
        </div>
        <div className="flex flex-wrap justify-around">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full sm:w-1/2 p-4">
              <div className="bg-gray-100 shadow-md shadow-gray-400 rounded-lg p-6">
                <p className="text-black text-lg">{testimonial.testimonial}</p>
                <h3 className="text-gray-700 mt-4 font-bold">
                  {testimonial.name}
                </h3>
                <div className="flex items-center">
                  {[...Array(testimonial.stars)].map((e, i) => (
                    <Star key={i} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
