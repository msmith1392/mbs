import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export type FaqItem = {
  question: string;
  answer: string;
};

type Props = {
  items: FaqItem[];
};

function FaqAccordion({ items }: Props): React.JSX.Element {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, index) => (
        <div key={index} className="overflow-hidden rounded-xl border border-white/10 bg-dark">
          <button
            type="button"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex w-full items-center justify-between px-6 py-5 text-left font-bold text-white transition-colors hover:bg-white/5"
            aria-expanded={openIndex === index}
          >
            <span className="tracking-wide">{item.question}</span>
            {openIndex === index ? (
              <ChevronUp size={18} className="shrink-0 text-blue-lct" />
            ) : (
              <ChevronDown size={18} className="shrink-0 text-blue-lct" />
            )}
          </button>
          {openIndex === index && (
            <div className="px-6 pb-6">
              <p className="text-sm leading-relaxed text-white/70">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FaqAccordion;
