import React from "react";
import Html from "../assets/Html.webp";
import Css from "../assets/Css.jpg";
import JavaScript from "../assets/JavaScript.png";
import Github from "../assets/Github.png";
import reactJs from "../assets/reactJs.png";
import Tailwind from "../assets/Tailwind.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: Html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: Css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: JavaScript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: Github,
      title: "Github",
      style: "shadow-gray-500",
    },
    {
      id: 5,
      src: reactJs,
      title: "ReactJs",
      style: "shadow-blue-500",
    },
    {
      id: 6,
      src: Tailwind,
      title: "Tailwind",
      style: "shadow-sky-500",
    },
  ];

  return (
    <>
      <div
        name="experience"
        className="py-10 bg-gradient-to-b from-gray-800 to-black w-full "
      >
        <div className="max-w-screen-lg mx-auto p-4 pt-12 flex flex-col justify-center w-full h-full text-white">
          <div>
            <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
              Experience
            </p>
            <p className="py-6">
              These are the technologies that I've worked with
            </p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {techs.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4 ">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
