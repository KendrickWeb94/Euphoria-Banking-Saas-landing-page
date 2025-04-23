import { Section3Img } from "../../constants";
import FAQSection from "../ui/faq";
import { SectionBadge } from "../ui/section-badge";

export const SeamlessBanking = () => {


  return (
    <section className="container-wrapper w-full pb-28">
      <div className="w-full grid-cols-1 grid items-center gap-16 md:grid-cols-2 justify-between">
        <div className="">
          <img
            src={Section3Img}
            alt="currency options graphic image"
            className="w-full object-cover"
          />
        </div>
        <div className="space-y-6">
          <SectionBadge id={3} name={"Seamless Banking"} />
          <h1 className="text-balance font-semibold leading-[1.2] text-4xl text-header sm:text-5xl md:max-w-xl">
            Smart Banking for a Digital World
          </h1>
          <p className="text-paragraph-text md:max-w-lg font-medium">
            Our Fintech banking service revolutionizes the way you manage your
            money, offering seamless, secure, and smart solutions for all your
            financial needs.
          </p>
          <div className="">
            <FAQSection />
          </div>
        </div>
      </div>
    </section>
  );
};
