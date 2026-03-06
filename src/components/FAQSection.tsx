"use client";

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQSection() {
  const faqs = [
    {
      question: 'What is DHG Management Services?',
      answer: 'DHG Management Services is a software platform built to help Discount Medical Plan Organizations manage enrollments, members, billing workflows, plan administration, and operations in one place.',
    },
    {
      question: 'Is the platform specifically designed for DMPOs?',
      answer: 'Yes. The platform is positioned around the operational needs of discount medical plan organizations rather than generic membership software.',
    },
    {
      question: 'Can we use our own branding?',
      answer: 'Yes. The enrollment experience can be structured to reflect your organization’s branding and member-facing experience.',
    },
    {
      question: 'Does it support recurring billing workflows?',
      answer: 'Yes. DHG Management Services is designed to support subscription-based payment operations and billing visibility.',
    },
    {
      question: 'Can staff verify member status?',
      answer: 'Yes. Authorized users can look up member details and verify status information quickly.',
    },
    {
      question: 'Is this suitable for growing organizations?',
      answer: 'Yes. The platform is intended for organizations that want stronger systems as they scale.',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-slate-200">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-slate-200">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="pt-6">
                <dt>
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="flex w-full items-start justify-between text-left text-slate-900 focus:outline-none"
                  >
                    <span className="text-lg font-semibold leading-7">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <ChevronDown
                        className={`h-6 w-6 transform transition-transform duration-200 ${
                          openIndex === index ? '-rotate-180' : 'rotate-0'
                        }`}
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                </dt>
                {openIndex === index && (
                  <dd className="mt-4 pr-12">
                    <p className="text-base leading-7 text-slate-600">{faq.answer}</p>
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
