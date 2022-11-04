import { useCallback, useEffect, useState } from "react";
import { AppProps } from "src/types";
import { NavbarItem } from "./Navbar";
import { Link, NavLink } from "react-router-dom";
import { joinClass } from "src/services";
import { motion } from "framer-motion";

export interface MobileNavbarProps extends AppProps {
  navbarItems: NavbarItem[];
}

export interface MobileNavbarItemProps extends AppProps {
  item: NavbarItem;
}

const MobileNavbarItem = (props: MobileNavbarItemProps) => {
  const { item } = props;
  return (
    <NavLink className="w-full" to={item.to} end>
      {({ isActive }) => {
        return (
          <div
            className={joinClass([
              "px-3 py-3 duration-200 text-center",
              isActive && "bg-cyan-500",
            ])}
          >
            {item.label}
          </div>
        );
      }}
    </NavLink>
  );
};

function MobileNavbar(props: MobileNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { navbarItems } = props;

  useEffect(() => {
    setIsOpen(false);

    return () => {
      setIsOpen(false);
    };
  }, []);

  const renderNavbarItems = useCallback(
    () => navbarItems.map((e, idx) => <MobileNavbarItem key={idx} item={e} />),
    [navbarItems]
  );

  const renderDrawer = useCallback(
    () => (
      <motion.div
        layout
        initial={{
          position: "fixed",
          height: "100vh",
          width: 0,
          borderRadius: "0 100 200 300",
        }}
        animate={{
          width: isOpen ? "100vw" : 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className=" top-0 right-0 bg-slate-900 h-full w-full relative text-zinc-200"
      >
        <button onClick={() => setIsOpen(!isOpen)} className="p-3">
          <i className="fa-solid fa-xmark text-3xl" />
        </button>
        <div className="w-full">{renderNavbarItems()}</div>
      </motion.div>
    ),
    [isOpen]
  );

  return (
    <div className="flex py-3 w-full px-3 items-center justify-between sticky z-20 top-0 bg-black">
      <Link
        to="/"
        className={joinClass([
          "flex items-center gap-2 justify-center duration-300",
          "text-2xl",
        ])}
      >
        <i className="fa-solid fa-code" />{" "}
        <span className="text-cyan-500">Gossling</span>
      </Link>
      <button onClick={() => setIsOpen(!isOpen)} className="p-1 text-cyan-500">
        <i className="fa-solid fa-bars text-2xl" />
      </button>
      {renderDrawer()}
    </div>
  );
}

export default MobileNavbar;
