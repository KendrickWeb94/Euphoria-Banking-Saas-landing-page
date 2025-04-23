import {
  Cards,
  DeviceMobile,
  MoneyWavy,
  Monitor,
  PiggyBank,
  Robot,
} from "@phosphor-icons/react/dist/ssr";

interface FeatureCard {
  id: number;
  title: string;
  text: string;
  icon: React.ComponentType<{ className?: string }>;
}

const FeatureItems: FeatureCard[] = [
  {
    id: 1,
    title: "Instant account setup",
    text: "Customers can set up a bank account in minutes",
    icon: Monitor,
  },
  {
    id: 2,
    title: "Real-Time payments",
    text: "Enables instant money transfers, both domestically and internationally",
    icon: MoneyWavy,
  },
  {
    id: 3,
    title: "Mobile banking",
    text: "Full-featured mobile app that allows users to manage their finances",
    icon: DeviceMobile,
  },
  {
    id: 4,
    title: "Automated savings",
    text: "Round up purchases or set regular transfers into a savings account",
    icon: PiggyBank,
  },
  {
    id: 5,
    title: "Ai-Powered budgeting",
    text: "Ai tools analyze spending patterns and provide personalized budgeting",
    icon: Robot,
  },
  {
    id: 6,
    title: "Virtual credit cards",
    text: "Generate virtual cards instantly for online shopping",
    icon: Cards,
  },
];

export const FeatureCard = () => {
  return (
    <div className="grid-cat-pricing-card w-full pt-8">
      {/* <h1 className="text-xl text-header font-semibold">{props.title}</h1>
       */}
      {FeatureItems.map((item) => {
        return (
          <div
            key={item.id}
            className="rounded-2xl bg-[#F2F5F7] py-6 border-[#0A1519]/5 p-4 border-[1.5px] flex items-center text-center flex-col gap-4"
          >
            <div className="w-12 h-12 rounded-full flex-center bg-primary text-white">
              <item.icon className="w-6 h-6" />
            </div>
            <h1 className="text-xl text-header inter-600">{item.title}</h1>
            <p className=" text-paragraph-text max-w-[350px] font-medium">
              {item.text}
            </p>
          </div>
        );
      })}
    </div>
  );
};
