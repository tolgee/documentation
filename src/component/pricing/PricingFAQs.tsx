import React from 'react';
import { PricingQuestions } from './PricingQuestions';
import { questions } from './questions';

export function PricingFAQs() {
  return (
    <section className="bg-surface flex flex-col items-center pb-14">
      <div className="pricing-details__table max-w-[800px]">
        {questions.map((q) => (
          <div
            key={q.id}
            id={'pricing-question-' + q.id}
            className="scroll-m-[60px]"
          />
        ))}
        <h2
          className="mt-12 mb-0 text-primary pricing-details__scroll-target text-center pb-8"
          id="pricing-details"
        >
          Frequently asked questions
        </h2>
        <PricingQuestions questions={questions} />
      </div>
    </section>
  );
}
