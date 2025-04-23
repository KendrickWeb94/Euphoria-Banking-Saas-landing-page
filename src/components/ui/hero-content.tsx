import { Play } from "@phosphor-icons/react/dist/ssr";
import { BadgeImg, HeroImg } from "../../constants";
import { Button } from "./button";

export const HeroContent = () => {
  return (
    <section className="w-fulll flex items-center justify-center">
      <div className="space-y-4 flex items-center flex-col">
        <img src={BadgeImg} className="" />
        <h1 className=" text-balance text-center text-3xl sm:text-5xl text-shadow-2xs font-semibold text-white max-w-4xl md:text-7xl">
          Cross-border payment made easy
        </h1>
        <p className="text-white/80 max-w-xl  sm:text-lg text-center">
          We help individuals and business to securely send and recieve money
          globally, without the bank fees
        </p>
        <div className="flex items-center flex-wrap justify-center gap-4">
          <Button name="Create an account" />
          <button className="py-2 cursor-pointer w-full xds:w-fit pl-2 pr-6 rounded-3xl flex items-center gap-3 bg-white text-paragraph-text">
            <div className="h-7 w-7 text-white flex-center rounded-full bg-primary">
              <Play />
            </div>
            <p className="text-sm font-medium">Watch Tutorial</p>
          </button>
        </div>
        <div className="my-10">
            <img src={HeroImg} className="object-cover" alt="" />
        </div>
      </div>
    </section>
  );
};
