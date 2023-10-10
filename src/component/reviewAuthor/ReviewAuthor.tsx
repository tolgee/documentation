import React from 'react';
import { AuthorSummary, AuthorType } from '../AuthorSummary';
import { styled } from '@mui/material';

const StyledContainer = styled('div')`
  border: 1px solid var(--ifm-color-gray-300);
  border-radius: 8px;
`;

type Props = {
  author: AuthorType;
  description: string;
  capterraReview: string;
};

export const ReviewAuthor = ({
  author,
  description,
  capterraReview,
}: Props) => {
  return (
    <div className="pt-6 text-left">
      <StyledContainer>
        <AuthorSummary
          author={{
            ...author,
            description: (
              <span className="italic">
                {description}
                <a
                  style={{ float: 'right' }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={capterraReview}
                >
                  See review
                </a>
              </span>
            ),
          }}
        />
      </StyledContainer>
    </div>
  );
};
