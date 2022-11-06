import { motion } from "framer-motion";
import { useState, useCallback } from "react";
import { NavLink } from "react-router-dom";

const style = {
  "font-satisfy": { fontFamily: '"Satisfy", sans-serif' },
};

function Intro() {
  const title = "Hello, I am Nguyen Hai".split("");

  const [currentColor, setCurrentColor] = useState<string>();

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
      }}
    >
      <div className="text-5xl font-semibold">{renderTitle()}</div>
      <div className="text-2xl italic mt-3" style={style["font-satisfy"]}>
        I am a web developer based in Ho Chi Minh City, Viet Nam.
        <br />
        Currently, I'm working at
        <span className="text-cyan-500 ml-2" style={style["font-satisfy"]}>
          TMA Solution
        </span>
      </div>
      <NavLink
        to="/about"
        className="flex items-center justify-center gap-2 mt-3 py-2 w-[100px] text-cyan-500 hover:text-zinc-200 border-cyan-500 border rounded-full hover:bg-cyan-500 shadow-lg hover:shadow-cyan-500/50"
      >
        <i className="fa-solid fa-magnifying-glass" /> About
      </NavLink>
    </motion.div>
  );
}

export default Intro;
