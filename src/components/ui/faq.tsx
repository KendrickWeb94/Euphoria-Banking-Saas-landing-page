import {  ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
  id: string;
  index: number;
  ActiveFaq: number;
  setActive: (index: number) => void;
}

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  id,
  index,
  ActiveFaq,
  setActive,
}) => {
  const headingId = `basic-heading-${id}-with-icon`;
  const collapseId = `basic-collapse-${id}-with-icon`;

  return (
    <div
      className={`accordion smooth bg-[#F2F5F7] p-4 rounded-xl transition duration-500  lg:p-4 ${
        id === "one"
          ? ""
          : ""
      }`}
      id={headingId}
    >
      <button
        onClick={() => setActive(index)}
        className="accordion-toggle group cursor-pointer inline-flex items-center justify-between text-left   leading-8 text-header w-full smooth"
        aria-controls={collapseId}
      >
        <h5 className="font-semibold text-[16px]">{question}</h5>
        {index === ActiveFaq ? <ChevronUp /> : <ChevronDown /> 
        
      }
      </button>
      {index === ActiveFaq && (
        <div
          id={collapseId}
          className={`accordion-content w-full smooth overflow-hidden pr-4 ${index === ActiveFaq ? "h-auto" : "h-0"}`}
          aria-labelledby={headingId}
          style={{ maxHeight: id === "one" ? "250px" : undefined }}
        >
          <p className="text-base text-header/50 font-medium leading-6">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

const FAQSection: React.FC = () => {
  const [ActiveFaq, setActiveFaq] = useState(0);

  const faqData = [
    {
      id: "one",
      question: "Personalized Financial Insights",
      answer:
        "Receive tailored insights and recommendations based on your spending habits, helping you make smarter financial decisions.",
    },
    {
      id: "two",
      question: "Bill Payment Reminders",
      answer:
        "Our system set an automatic bill payment reminder, if you have already used our platform to pay that bill",
    },
    {
      id: "three",
      question: "Peer-to-Peer Transfers",
      answer:
        "Send and recieve money easy and fast, no transactional breakdown and it's secure too",
    },
  ];

  return (
    <section className="py-0">
      <div className="mx-auto">
        <div className="space-y-2" data-accordion="default-accordion">
          {faqData.map((item, index) => (
            <FAQItem
              key={item.id}
              setActive={setActiveFaq}
              index={index}
              question={item.question}
              answer={item.answer}
              id={item.id}
              ActiveFaq={ActiveFaq}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
