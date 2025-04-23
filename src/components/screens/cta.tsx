import { Ratings, User1, User2, User3, User4, User5 } from "../../constants";
import { Button } from "../ui/button";

export const CTA = () => {
  return (
    <section className="container-wrapper pb-28">
      <div className="w-full rounded-4xl flex py-16 items-center justify-center cta-section bg-cover bg-no-repeat h-auto px-4 bg-center">
        <div className="w-full flex items-center justify-center flex-col space-y-5">
          <div className="flex items-center gap-4">
            <img src={Ratings} className="w-18" alt="" />
            <p className="text-white text-sm">4.9/5</p>
          </div>
          <div className="flex items-center -space-x-2">
            <img
              src={User1}
              className="object-cover border border-white w-8 h-8 rounded-full"
              alt=""
            />
            <img
              src={User2}
              className="object-cover border border-white w-8 h-8 rounded-full"
              alt=""
            />
            <img
              src={User3}
              className="object-cover border border-white w-8 h-8 rounded-full"
              alt=""
            />
            <img
              src={User4}
              className="object-cover border border-white w-8 h-8 rounded-full"
              alt=""
            />
            <img
              src={User5}
              className="object-cover border border-white w-8 h-8 rounded-full"
              alt=""
            />
            <div className="border border-white w-8 h-8 rounded-full flex items-center text-xs bg-white text-header justify-center">
              <p>10K+</p>
            </div>
          </div>
          <p className="text-white/70 text-center">
            Over 10K+ Entrepreneurs,and <br /> business choose us
          </p>
          <h1 className="text-center text-balance font-semibold leading-[1.3] text-3xl text-white sm:text-6xl md:max-w-5xl">
            Empowering Your Financial Freedom
          </h1>
          <p className="text-white/70 text-center text-sm sm:text-base text-balanc md:max-w-xl font-medium">
            Trust us to deliver cutting-edge innovation, transparency, and
            personalized service, all designed to help you achieve financial
            freedom
          </p>
          <div className="">
            <Button name="Get Started now" />
          </div>
        </div>
      </div>
    </section>
  );
};
