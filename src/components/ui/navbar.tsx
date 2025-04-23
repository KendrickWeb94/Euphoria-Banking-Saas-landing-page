import { Logo } from "./logo";
import { ArrowRight, List } from "@phosphor-icons/react/dist/ssr";
import { Mobile_NavBar } from "./mobile-sidebar";
import { useState } from "react";

export const NavBar = () => {
  const [ToggleMenu, SetToggleMenu] = useState(false);
  function ToggleMenuBtn() {
    SetToggleMenu(!ToggleMenu);
  }
  return (
    <div className="w-full flex py-4 items-center relative justify-between">
      <section
        className={`fixed z-20 h-screen top-0 smooth max-w-70 w-full bg-primary/80 border rounded-r-xl -bottom-75 border-white/50 ${ToggleMenu ? "left-0" : "-left-300"}`}
      >
        <Mobile_NavBar />
      </section>
      <Logo />
      <ul className="list-none hidden inter-300 text-white/60  gap-6 md:flex items-baseline">
        <li className="smooth hover:text-primary">
          <a href="#About">About</a>
        </li>
        <li className="smooth hover:text-primary">
          <a href="#About">Services</a>
        </li>
        <li className="smooth hover:text-primary">
          <a href="#About">Pricing</a>
        </li>
        <li className="smooth hover:text-primary">
          <a href="#About">Company</a>
        </li>
        <li className="smooth hover:text-primary">
          <a href="#About">Resources</a>
        </li>
      </ul>
      <div className="flex items-center inter-300 gap-2">
        {/* <button className="flex px-4 py-2 text-sm cursor-pointer smooth bg-transparent border border-white hover:text-white text-white font-medium hover:bg-white/20 rounded-full items-center gap-4">
                    Sign in
                </button> */}
        <button className="hidden sm:flex px-4 py-2 text-sm cursor-pointer smooth hover:bg-transparent border border-primary hover:text-primary text-white font-medium bg-primary/60 rounded-full items-center gap-4">
          Register <ArrowRight size={18} />
        </button>
        <button
          onClick={ToggleMenuBtn}
          className="flex-center w-7 flex md:hidden  cursor-pointer  smooth hover:bg-primary hover:text-white h-7 rounded-md border border-white/60"
        >
          <List className="text-white" />
        </button>
      </div>
    </div>
  );
};
