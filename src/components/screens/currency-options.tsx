import { Check } from "lucide-react";
import { CurrencyOptionsImg } from "../../constants";
import { SectionBadge } from "../ui/section-badge";
import { Button } from "../ui/button";

export const CurrencyOptions = () => {
  return (
    <section className="container-wrapper w-full py-28">
      <div className="w-full grid-cols-1 grid items-center gap-16 md:grid-cols-2 justify-between">
        <div className="space-y-8">
          <SectionBadge id={3} name={"Limitless currency options"} />
          <h1 className="text-balance font-semibold w-full leading-[1.2] text-4xl text-header sm:text-5xl md:max-w-xl">
            One account for 90+ currencies worldwide
          </h1>
          <p className="text-paragraph-text md:max-w-lg font-medium">
            our easy setuo ensures businesses can start using it effortlessly, making financial management more straightforward and reliable
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <span className="w-4 h-4 rounded-full bg-primary flex-center text-white">
                <Check size={10} />
              </span>
              <p className="text-header font-medium">
                Convert currencies effortlessly & instantly
              </p>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-4 h-4 rounded-full bg-primary flex-center text-white">
                <Check size={10} />
              </span>
              <p className="text-header font-medium">
                Simple and intiutive platform for managing
              </p>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-4 h-4 rounded-full bg-primary flex-center text-white">
                <Check size={10} />
              </span>
              <p className="text-header font-medium">
                Monitor your budget anytime , anywhere
              </p>
            </li>
          </ul>
          <span className="">
            <Button name="Get Started now" />
          </span>
        </div>
        <div className="">
          <img
            src={CurrencyOptionsImg}
            alt="currency options graphic image"
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
