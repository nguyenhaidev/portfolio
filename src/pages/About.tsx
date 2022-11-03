import React, { useEffect, useState } from "react";
import reactjs from "../assets/images/react.png";
import vuejs from "../assets/images/vue.png";
import js from "../assets/images/js.png";
import { Fade, useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const getPicture = (index: number) => {
  switch (index) {
    case 0:
      return reactjs;
    case 1:
      return vuejs;
    case 2:
      return js;
    default:
      break;
  }
};

function About() {
  const [index, setIndex] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    onOpen();
    const timer = setInterval(() => {
      onClose();
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex >= 2 ? 0 : prevIndex + 1));
      }, 400);
      setTimeout(() => {
        onOpen();
      }, 400);
    }, 3000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="w-full flex px-0 flex-col items-center">
      <div className="h-full w-full min-h-600px md:min-h-screen flex items-center">
        <div className="mx-5 w-full text-4xl md:text-8xl flex flex-col-reverse md:flex-row items-center justify-around font-semibold">
          <p className="self-start md:self-center">
            I build web
            <br />
            application with
            <br />
            ReactJS and VueJS
          </p>
          <Fade className="mb-5" in={isOpen}>
            <img
              src={getPicture(index)}
              alt={getPicture(index)}
              className={`h-[400px] w-[400px] object-contain`}
            />
          </Fade>
        </div>
      </div>
      <div id="summary" className="max-w-4xl w-full px-5 mt-10">
        <label htmlFor="summary" className="text-4xl font-bold">
          About.
        </label>
        <p className="mt-5">
          <p className="text-xl font-semibold">
            Hi! My name is Nguyen Hai. Currently, I'm working as a frontend
            engineer. I have over 1+ year of experience in web development
            including <span className="text-sky-500">ReactJS</span> and{" "}
            <span className="text-green-600">VueJS</span>. Besides that, I am
            proficient in popular coding languages including
            <span className="text-yellow-500"> JavaScript</span> and
            <span className="text-sky-600"> TypeScript</span> , as well as
            excellent knowledge of the software development life cycle also.
          </p>
          <p className="font-thin text-lg">
            <p className="mt-4">
              I have started working as a frontend developer since December,
              2021 up to now. At the end of this year, I graduated from
              University of Science - Ho Chi Minh City majoring in Information
              System.
            </p>
            <p className="mt-4">
              My colleagues said that I was humorous and enthusiastic person but
              sometimes I talk too much also. I'm fueled by high energy levels
              and boundless enthusiasm, I'm easily inspired and more then
              willing to follow my fascinations wherever they take me.
            </p>
            <p className="mt-4">
              My abundant energy fuels me in the pursuit of many interests,
              hobbies, areas of study and artistic endeavors. I’m a fast
              learner, able to pick up new skills and juggle different projects
              and roles with relative ease.
            </p>
            <p className="mt-4">
              If there are something else you want to know about me, you can
              find it in link bellow:
            </p>

            <div className="w-full mt-[3rem] duration-300 hover:translate-x-5 group">
              <a
                className="text-cyan-500 hover:text-red-500 flex items-center gap-1"
                href="https://drive.google.com/drive/folders/1e8R9NkCLmt5ZE8C8PUu3Ecily9UBNZMv?usp=sharing"
              >
                More Information{" "}
                <i className="fa-solid fa-angles-right group-hover:translate-x-1 " />
              </a>
            </div>
          </p>
        </p>
      </div>
    </div>
  );
}

export default About;
