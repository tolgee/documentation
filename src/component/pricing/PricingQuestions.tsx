import { UnfoldLess, UnfoldMore } from '@mui/icons-material';
import React, { useEffect, useRef, useState } from 'react';
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
  const [open, setOpen] = useState(false);

  const hash = `pricing-question-${id}`;

  useEffect(() => {
    setOpen(router.hash === `#${hash}`);
  }, [router.hash]);

  return (
    <>
      <div
        className="pricing-details__name"
        onClick={() => {
          if (open) {
            history.replaceState(null, null, ' ');
            setOpen(false);
          } else {
            window.location.hash = hash;
            setOpen(true);
          }
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
