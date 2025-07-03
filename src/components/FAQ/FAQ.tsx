import { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { LuCircleMinus } from "react-icons/lu";


const faqs = [
  { question: "What social media platforms do you support?", answer: "Currently, our MVP supports automated posting to **Instagram** and optionally **Facebook** via the Meta API. We are planning future integrations with X (Twitter), YouTube, TikTok, and LinkedIn." },
  { question: "How does the AI generate captions and hashtags?", answer: "Currently, our MVP supports automated posting to **Instagram** and optionally **Facebook** via the Meta API. We are planning future integrations with X (Twitter), YouTube, TikTok, and LinkedIn." },
  { question: "What are the requirements for connecting my accounts?", answer: "Currently, our MVP supports automated posting to **Instagram** and optionally **Facebook** via the Meta API. We are planning future integrations with X (Twitter), YouTube, TikTok, and LinkedIn." },
  { question: "Is my data secure on your platform?", answer: "Currently, our MVP supports automated posting to **Instagram** and optionally **Facebook** via the Meta API. We are planning future integrations with X (Twitter), YouTube, TikTok, and LinkedIn." },
  { question: "Can I edit the AI-generated captions and hashtags?", answer: "Currently, our MVP supports automated posting to **Instagram** and optionally **Facebook** via the Meta API. We are planning future integrations with X (Twitter), YouTube, TikTok, and LinkedIn." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState                                    <number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl bg-white mx-3 md:mx-5 lg:mx-auto mt-10 border border-slate-100 py-10 rounded-xl">
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-center">Frequently asked questions</h1>
        <p className="text-[#667085] text-sm md:text-base text-center mt-5 mb-14">Everything you need to know about the product and billing.</p>
        <div className="max-w-4xl mx-auto">

      {faqs.map((faq, index) => (
        <div key={index} className="mb-6 pb-5 border-b border-[#D0D0D0]  overflow-hidden">
          <button
            onClick={() => toggle(index)}
            className="flex items-center justify-between w-full hover:cursor-pointer text-xs sm:text-base md:text-lg px-2"
          >
            <span>{faq.question}</span>
            {
                openIndex ===index ? <LuCircleMinus className="text-[#7F56D9]"/> : <FiPlusCircle className="text-[#7F56D9]"/> 
            }

          </button>
          {openIndex === index && (
            <div className="py-3 text-[#667085] text-xs sm:text-sm md:text-base">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
        </div>
    </div>
  );
};

export default FAQ;


