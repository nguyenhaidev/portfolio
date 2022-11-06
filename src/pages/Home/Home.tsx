import { motion } from "framer-motion";
import _ from "lodash";
import {
  useCallback,
  useEffect,
  useState,
  useRef,
  WheelEventHandler,
} from "react";
import { Link, NavLink } from "react-router-dom";
import { joinClass } from "src/services";
import { AppProps } from "src/types";
import Intro from "./Intro";

const style = {
  "font-satisfy": { fontFamily: '"Satisfy", sans-serif' },
};

const Home = () => {
  const [posts, setPosts] = useState([
    { id: "123123", label: "new post 1", createdAt: new Date() },
    { id: "123123", label: "new post 2", createdAt: new Date() },
    { id: "123123", label: "new post 3", createdAt: new Date() },
  ]);

  const [works, setWorks] = useState([
    {
      id: "123123",
      label: "new post 1",
      createdAt: new Date(),
      imageUrl: "https://picsum.photos/600",
      description:
        "Dolore cillum et nisi minim cillum. Enim dolor duis sunt cillum nostrud dolore ad ea excepteur proident mollit incididunt. Dolor nostrud sunt nostrud ullamco dolor minim aliqua. In laborum tempor consequat enim.",
    },
    // {
    //   id: "123123",
    //   label: "new post 2",
    //   createdAt: new Date(),
    //   imageUrl: "https://picsum.photos/601",
    //   description:
    //     "Dolore cillum et nisi minim cillum. Enim dolor duis sunt cillum nostrud dolore ad ea excepteur proident mollit incididunt. Dolor nostrud sunt nostrud ullamco dolor minim aliqua. In laborum tempor consequat enim.",
    // },
    // {
    //   id: "123123",
    //   label: "new post 3",
    //   createdAt: new Date(),
    //   imageUrl: "https://picsum.photos/599",
    //   description:
    //     "Dolore cillum et nisi minim cillum. Enim dolor duis sunt cillum nostrud dolore ad ea excepteur proident mollit incididunt. Dolor nostrud sunt nostrud ullamco dolor minim aliqua. In laborum tempor consequat enim.",
    // },
  ]);

  const [currentColor, setCurrentColor] = useState<string>();

  const title = "Hello, I am Nguyen Hai".split("");
  const randomColorText = useCallback(() => {
    const textColors = [
      "hover:text-cyan-400",
      "hover:text-amber-400",
      "hover:text-green-400",
      "hover:text-red-400",
    ];
    return textColors[Math.floor(Math.random() * textColors.length)];
  }, []);

  const renderTitle = () =>
    title.map((e, idx) =>
      e !== " " ? (
        <div
          key={idx}
          onMouseEnter={() => setCurrentColor(randomColorText())}
          className={`hover:-translate-y-1 ${currentColor} pr-2 inline-block duration-300`}
          style={{ cursor: "context-menu" }}
        >
          {e}
        </div>
      ) : (
        e
      )
    );

  const renderPost = useCallback(
    () =>
      posts.map((e, idx) => (
        <div className="my-5" key={idx}>
          <div style={style["font-satisfy"]}>
            {e.createdAt.getDay()}/{e.createdAt.getMonth()}/
            {e.createdAt.getFullYear()}
          </div>
          <Link
            to={`blogs/${e.id}`}
            className="font-semibold text-2xl uppercase"
          >
            {e.label}
          </Link>
        </div>
      )),
    [posts]
  );

  const renderWorkItem = useCallback(
    () =>
      works.map((e, idx) => (
        <div className="my-5 z-10" key={idx}>
          <Link to={`blogs/${e.id}`} className="font-semibold relative">
            <div className="group w-full rounded-md bg-slate-300 overflow-hidden relative shadow-lg hover:shadow-cyan-500/50">
              <img
                src={e.imageUrl}
                className="w-full object-cover h-[300px] duration-300 group-hover:scale-110 group-hover:opacity-50"
                alt={e.label}
              />
              <div className="group invisible absolute h-full w-full duration-300 top-0 group-hover:bg-slate-900/80 group-hover:visible flex items-center justify-center">
                <div className="text-center  group-hover:scale-100 scale-75 duration-200 absolute text-cyan-500 p-5">
                  <div className="uppercase text-2xl">{e.label}</div>
                  <div className="mt-3 text-white">{e.description}</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      )),
    [works]
  );

  return (
    <div className="w-full h-screen">
      <div className="snap-mandatory snap-y w-full h-full overflow-auto">
        <div className="snap-start h-screen introduce flex items-center justify-center snap-always">
          <div className="max-w-3xl w-full px-3">
            <Intro />
          </div>
        </div>
        <div
          id="recent-post"
          className="h-screen snap-center snap-always flex justify-center items-center flex-col"
        >
          <div className="w-full max-w-3xl px-3">
            <label htmlFor="recent-post" className="uppercase text-cyan-500">
              Recent posts
            </label>
            <div className="mt-10">{renderPost()}</div>
            <LinkButton className="mt-8" to="/blogs" label="More" />
          </div>
        </div>
        <div
          id="project"
          className="h-screen w-full snap-center snap-always flex items-start flex-col justify-center items-center"
        >
          <div className="max-w-3xl w-full px-3">
            <label htmlFor="recent-post" className="uppercase text-cyan-500">
              Works
            </label>
            <div className="mt-10 w-full">{renderWorkItem()}</div>
            <LinkButton className="mt-8" to="/blogs" label="More" />
          </div>
        </div>
      </div>
    </div>
  );
};

export interface LinkButtonProps extends AppProps {
  to: string;
  label: string;
}

const LinkButton = (props: LinkButtonProps) => (
  <Link
    to={props.to}
    className={joinClass(["group flex items-center", props.className])}
  >
    <span className="group-hover:text-cyan-500 mr-1">{props.label}</span>
    <i className="fa-solid fa-angles-right group-hover:text-cyan-500 group-hover:translate-x-1 duration-150"></i>
  </Link>
);

export default Home;
