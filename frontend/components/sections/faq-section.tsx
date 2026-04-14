"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQItem } from "@/app/(home)/type";

const faqs: FAQItem[] = [
  {
    question: "How do we ensure brand protection?",
    answer: "We implement strict quality control and monitoring across all our distribution channels to ensure your brand's integrity is maintained and strengthened.",
  },
  {
    question: "What sectors do you currently serve?",
    answer: "Currently, we specialize in Health & Wellness, Beauty & Care, Grocery & Retail, Premium Garden, Electronics, and Automotive sectors.",
  },
  {
    question: "How can I become a brand partner?",
    answer: "You can reach out to us through our 'Get in Touch' button. Our team will conduct a preliminary analysis to see how we can best support your brand's growth.",
  },
  {
    question: "What is your distribution network like?",
    answer: "We have over 500 distribution centers across the U.S., allowing for rapid scaling and efficient last-mile delivery to diverse retail outlets.",
  },
  {
    question: "Do you handle international logistics?",
    answer: "While our core strength is U.S. wide distribution, we do partner with international brands looking to enter the North American market.",
  },
];

export function FAQSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-bold tracking-[0.2em] text-xs mb-4 uppercase">
            Questions
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 uppercase tracking-tighter">
            BRAND PARTNERSHIP FAQS
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto" />
        </div>

        <Accordion className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-black/5 rounded-sm px-6 bg-secondary/10 data-[state=open]:bg-secondary/20 transition-all"
            >
              <AccordionTrigger className="text-left font-bold text-primary hover:text-accent transition-colors py-6 text-sm md:text-base uppercase tracking-wider">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-16 text-center">
          <p className="text-xs text-muted-foreground mb-4 uppercase tracking-widest font-bold">Still have questions?</p>
          <button className="text-primary font-black text-xs uppercase tracking-[0.2em] hover:text-accent border-b-2 border-accent pb-1 transition-all">
            Contact our support team
          </button>
        </div>
      </div>
    </section>
  );
}
