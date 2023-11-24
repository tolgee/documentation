import { UnfoldLess, UnfoldMore } from '@mui/icons-material';
import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';

export type Question = {
  title: string;
  content: React.ReactNode;
  id?: string;
};

export type PricingQuestionProps = {
  question: Question;
};

export function PricingQuestion({
  question: { id, title, content },
}: PricingQuestionProps) {
  const router = useLocation();
  const contentRef = useRef<HTMLDivElement>(null);

  const hash = `pricing-question-${id}`;

  const open = router.hash === '#' + hash;

  return (
    <>
      <div
        className="pricing-details__name"
        onClick={() => {
          window.location.hash = hash;
        }}
      >
        <div>{title}</div>
        {open ? <UnfoldLess /> : <UnfoldMore />}
      </div>
      <div
        ref={contentRef}
        className="pricing-details__description"
        style={{
          height: open ? contentRef.current?.scrollHeight || 'auto' : 0,
        }}
      >
        <div className="pricing-details__description--inner">{content}</div>
      </div>
      <div className="pricing-details__separator" />
    </>
  );
}

type Props = {
  questions: readonly Question[];
};

export function PricingQuestions({ questions }: Props) {
  return (
    <>
      {questions.map((question) => (
        <PricingQuestion key={question.id} question={question} />
      ))}
    </>
  );
}
