interface PricingCardProps {
  id: number;
  plan: string;
  plan_desc: string;
  pricing: string;
  benefits1: string;
  benefits2: string;
  benefits3: string;
  benefits4: string;
  benefits5: string;
  isyearlyplan: string;
}

import { Check } from "@phosphor-icons/react";

export const PricingCard = (props: PricingCardProps) => {
  return (
    <div className="rounded-3xl border py-6 smooth-sm border-white/20 bg-white/10 p-4 space-y-5">
      <h1 className="text-white text-lg font-urbanist font-semibold">
        {props.plan}
      </h1>
      <p className="text-white/70">{props.plan_desc}</p>
      <div className="flex items-baseline gap-2">
        <h3 className="text-white text-3xl smooth-sm font-bold">{props.pricing}</h3>
        <p className="text-sm text-white/70 smooth-sm">
          {props.isyearlyplan}
        </p>
      </div>
      <div className="rounded-3xl border border-white/20 bg-white/5 py-4 px-3 space-y-3">
        <li className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full bg-primary flex-center text-white">
            <Check size={10} />
          </span>
          <p className="text-sm font text-white">{props.benefits1}</p>
        </li>
        <li className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full bg-primary flex-center text-white">
            <Check size={10} />
          </span>
          <p className="text-sm font text-white">{props.benefits2}</p>
        </li>
        <li className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full bg-primary flex-center text-white">
            <Check size={10} />
          </span>
          <p className="text-sm font text-white">{props.benefits3}</p>
        </li>
        <li className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full bg-primary flex-center text-white">
            <Check size={10} />
          </span>
          <p className="text-sm font text-white">{props.benefits4}</p>
        </li>
        <li className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full bg-primary flex-center text-white">
            <Check size={10} />
          </span>
          <p className="text-sm font text-white">{props.benefits5}</p>
        </li>
      </div>
      <button className="w-full cursor-pointer py-3 px-4 flex-center text-white text-sm font smooth hover:bg-primary/80 bg-primary rounded-full">
        Select This Plan
      </button>
    </div>
  );
};
