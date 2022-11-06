import React, { useState } from "react";
import { Link } from "react-router-dom";
import { joinClass } from "src/services";

export interface WorkItem {
  url: string;
  title: string;
  description: string;
}

function Works() {
  const [currentActive, setCurrentActive] = useState<WorkItem>();
  const [works, setWorks] = useState([
    {
      url: "/works/1",
      title: "Project 1",
      description: "This is description",
    },
    {
      url: "/works/2",
      title: "Project 2",
      description: "This is description",
    },
    {
      url: "/works/3",
      title: "Project 3",
      description: "This is description",
    },
    {
      url: "/works/4",
      title: "Project 4",
      description: "This is description",
    },
  ]);

  const itemProps = (e: WorkItem) => ({
    onMouseEnter: () => setCurrentActive(e),
    onMouseLeave: () => setCurrentActive(undefined),
  });

  const renderWorks = () =>
    works.map((e, idx) => (
      <Link
        {...itemProps(e)}
        to={e.url}
        id={idx.toString()}
        key={idx}
        className={joinClass([
          "group hover:translate-x-10 duration-300 cursor-pointer",
          currentActive && currentActive !== e ? "opacity-30" : "opacity-100",
        ])}
      >
        <label
          htmlFor={idx.toString()}
          className="text-4xl group-hover:font-bold cursor-pointer"
        >
          {e.title}
        </label>
        <div className="mt-3 text-xl text-red-500">
          {e.description}{" "}
          <i className="fa-solid fa-angles-right group-hover:translate-x-1 " />
        </div>
      </Link>
    ));

  return (
    <div className="w-full px-5 flex justify-center">
      <div className="flex w-full max-w-4xl flex-col gap-[10rem] py-[300px] h-screen overflow-y-auto">
        {renderWorks()}
      </div>
    </div>
  );
}

export default Works;
