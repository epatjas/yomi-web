'use client';

import { useState } from 'react';
import styles from './FAQ.module.css';
import { ChevronDown } from 'lucide-react';

type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "What is Yomi?",
      answer: "Yomi is your child's virtual reading companion that grows and evolves through reading activities. Think Tamagotchi meets reading tutor - the more your child reads, the more Yomi thrives!"
    },
    {
      question: "Why Yomi works?",
      answer: "Yomi combines proven learning methods with gamification elements that children love. By turning reading practice into an interactive experience with a virtual companion, children stay motivated and engaged. The immediate feedback and progress tracking help build confidence and create lasting reading habits."
    },
    {
      question: "How does Yomi adapt to my child's needs?",
      answer: "Yomi uses advanced speech recognition and natural language processing to understand your child's reading level and progress. It automatically adjusts the difficulty of reading materials and provides personalized support where needed, ensuring an optimal learning experience."
    },
    {
      question: "What age group is Yomi suitable for?",
      answer: "Yomi is designed for children aged 6-12 who are learning to read or improving their reading skills. The app adapts to different reading levels, making it suitable for both early readers and more advanced students."
    },
    {
      question: "How do I get started with Yomi?",
      answer: "Getting started is easy! Simply download the Yomi app, create a profile for your child, and let them choose their first story. Yomi will guide them through the process and start adapting to their reading style right away."
    }
  ];

  return (
    <section id="faq" className={styles.wrapper}>
      <h2 className={styles.title}>FAQ</h2>
      
      <div className={styles.list}>
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`${styles.item} ${openIndex === index ? styles.open : ""}`}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div className={styles.question}>
              <h3>{faq.question}</h3>
              <ChevronDown className={styles.icon} />
            </div>
            <div className={styles.answer}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 