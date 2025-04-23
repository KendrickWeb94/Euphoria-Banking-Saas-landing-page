
import { FeatureCard } from "../ui/feature-card";
import { SectionBadge } from "../ui/section-badge";

export const Features = () => {
  return (
    <div className="w-full pt-28 container-wrapper">
      <div className="w-full space-y-5 flex items-center justify-center  flex-col">
        <SectionBadge name={"Features"} id={1} />
        <h1 className="text-center text-balance font-semibold leading-[1.3] text-4xl text-header sm:text-6xl max-w-xl">
          Banking reimagined for the future
        </h1>
        <p className="text-paragraph-text text-center max-w-xl font-medium">
          Trust to deliver cutting-edge innovation, transparency and
          personalized service, all designed to help you achieve finacial
          freedom
        </p>
       <FeatureCard />
      </div>
    </div>
  );
};
