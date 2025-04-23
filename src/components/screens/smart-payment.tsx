
import { PhoneImg } from "../../constants";
import { SectionBadge } from "../ui/section-badge";
import { Button } from "../ui/button";
import { DeviceMobile, Headphones, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import { RefreshCcw } from "lucide-react";


export const SmartPayment = () => {
  return (
    <section className="container-wrapper w-full pb-28">
      <div className="w-full grid-cols-1 grid items-center gap-16 md:grid-cols-2 justify-between">
        <div className="">
          <img
            src={PhoneImg}
            alt="currency options graphic image"
            className="w-full object-cover"
          />
        </div>
        <div className="space-y-8">
          <SectionBadge id={3} name={"Smart Payment"} />
          <h1 className="text-balance font-semibold leading-[1.2] text-4xl text-header sm:text-5xl md:max-w-xl">
           Our payment system is easy to setup
          </h1>
          <p className="text-header/50 md:max-w-lg font-normal">
            Our platform allows you to send, recieve and convert currencies
            seamlessly in real-time, all while saving on fees.
          </p>
          <ul className="grid-cat-2">
            <li className="flex items-center gap-4 rounded-xl border-[1.5px] border-[#0A1519]/5 bg-transparent py-2 px-2">
            <span className="w-14 h-10 rounded-md bg-primary flex-center text-white">
                    <ShieldCheck size={24}/>
              </span>
              <p className="text-gray-600 text-sm font-medium">Encryption ensure your payments are safe</p>
            </li>
            <li className="flex items-center gap-4 rounded-xl border-[1.5px] border-[#0A1519]/5 bg-transparent px-3">
            <span className="w-14 h-10 rounded-md bg-primary flex-center text-white">
                    <DeviceMobile size={24}/>
              </span>
              <p className="text-gray-600 text-sm font-medium">Manage payment on the go with our mobile app</p>
            </li>
            <li className="flex items-center gap-4 rounded-xl border-[1.5px] border-[#0A1519]/5 bg-transparent py-2 px-3">
            <span className="w-14 h-10 rounded-md bg-primary flex-center text-white">
                    <RefreshCcw size={20}/>
              </span>
              <p className="text-gray-600 text-sm font-medium">Pay and recieve and currenices effortlessly</p>
            </li>
            <li className="flex items-center gap-4 rounded-xl border-[1.5px] border-[#0A1519]/5 bg-transparent py-2 px-3">
            <span className="w-14 h-10 rounded-md bg-primary flex-center text-white">
                    <Headphones size={24}/>
              </span>
              <p className="text-gray-600 text-sm font-medium">Our team is available around the clock</p>
            </li>
          </ul>
          <span className="">
            <Button name="Get Started now" />
          </span>
        </div>
      </div>
    </section>
  );
};
