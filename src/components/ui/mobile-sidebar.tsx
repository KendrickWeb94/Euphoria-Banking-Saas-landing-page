import { Logo } from "./logo";


export const Mobile_NavBar = () => {
  return (

      <div className="w-full flex-col gap-4 inter-300 h-screen flex py-4 p-4 justify-between">
    <Logo />
        <ul className="list-none  text-white  gap-4 flex-col flex items-baseline">
          <li className="smooth hover:pl-4">
            <a href="#About">About</a>
          </li>
          <li className="smooth hover:pl-4">
            <a href="#About">Services</a>
          </li>
          <li className="smooth hover:pl-4">
            <a href="#About">Pricing</a>
          </li>
          <li className="smooth hover:pl-4">
            <a href="#About">Company</a>
          </li>
          <li className="smooth hover:pl-4">
            <a href="#About">Resources</a>
          </li>
        </ul>
        <div className="flex items-center gap-2">
          {/* <button className="flex px-4 py-2 text-sm cursor-pointer smooth bg-transparent border border-white hover:text-white text-white font-medium hover:bg-white/20 rounded-full items-center gap-4">
                    Sign in
                </button> */}
          <button className="flex px-4 py-2 text-sm w-full cursor-pointer smooth hover:bg-transparent border border-white hover:text-white flex-center text-white font-medium  rounded-full items-center gap-4">
            Register
          </button>
        </div>
      </div>

  );
};
