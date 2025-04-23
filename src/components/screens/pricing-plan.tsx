import { useState } from "react";
import { PricingCard } from "../ui/pricing-card";
import { SectionBadge } from "../ui/section-badge";

export const PricingPlan = () => {
  const [IsYearly, setIsYearly] = useState(false);
  function ToggleYearly() {
    setIsYearly(!IsYearly);
  }
  return (
    <main className="w-full min-h-screen pricing-section bg-cover mb-28 bg-center bg-no-repeat">
      <section className="container-wrapper py-16 w-full">
        <div className="w-full space-y-6 flex items-center justify-center flex-col">
          <SectionBadge id={4} name="Pricing Plans" />
          <h1 className="text-center text-balance font-semibold leading-[1.1] text-4xl text-white sm:text-5xl max-w-3xl">
            Select a plan that will empower your business growth
          </h1>
          <p className="text-white/70 text-center max-w-xl font-regular">
            Each package includes personalized consultation and revisions to
            guarantee your satisfaction.
          </p>
          <button
            onClick={ToggleYearly}
            className="rounded-full  flex border font-medium border-white/20 bg-white/10 "
          >
            <div
              className={`px-6 py-3 text-sm text-white smooth-sm  rounded-full ${IsYearly ? "bg-transparent" : "bg-primary"}`}
            >
              Monthly
            </div>
            <div
              className={`px-6 py-3 text-sm text-white  smooth-sm rounded-full ${IsYearly ? "bg-primary" : "bg-transparent"}`}
            >
              Yearly
            </div>
          </button>
          <div className="grid-cat-pricing-cards w-full">
            <PricingCard
              id={0}
              plan={"Starter Plan"}
              plan_desc={"Ideal for startups and mid-sized companies"}
              pricing={"$0"}
              benefits1={"Account aggregation"}
              benefits2={"Expense tracking"}
              benefits3={"Basic analytics system"}
              benefits4={"Budgeting tools"}
              benefits5={"24/7 customer support"}
              isyearlyplan={`${IsYearly ? "/ Per year" : " / Per Month"}`}
            />
            <PricingCard
              id={0}
              plan={"Growth Plan"}
              plan_desc={"Perfect for smaller organizations with mimimal needs"}
              pricing={`${IsYearly ? "$588" : "$49"}`}
              benefits1={"Everything in Starter Plan"}
              benefits2={"Advanced Budgeting Tools"}
              benefits3={"Customizable Dashboards"}
              benefits4={"Transaction Insights"}
              benefits5={"Enhanced Security"}
              isyearlyplan={`${IsYearly ? "/ Per year" : " / Per Month"}`}
            />
            <PricingCard
              id={0}
              plan={"Business Plan"}
              plan_desc={"Perfect for larger organizations with advanced needs"}
              pricing={`${IsYearly ? "$1,188" : "$99"}`}
              benefits1={"Everything in Growth Plan"}
              benefits2={"Investment Tracking"}
              benefits3={"Integration Services"}
              benefits4={"Ai and Automation"}
              benefits5={"Premium Security"}
              isyearlyplan={`${IsYearly ? "/ Per year" : " / Per Month"}`}
            />
          </div>
        </div>
      </section>
    </main>
  );
};
