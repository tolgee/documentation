import React from 'react';
import { AuthorSummary } from '../../src/component/AuthorSummary';
import Author from '@theme/Blog/Components/Author';
import { styled } from '@mui/material';

const StyledContainer = styled('div')`
  border: 1px solid var(--ifm-color-gray-300);
  border-radius: 8px;
  max-width: 500px;
  margin: 18px 0px;
`;

type Props = {
  author: React.ComponentProps<typeof Author>['author'];
  description: string;
  capterraReview: string;
};

export const ReviewAuthor = ({
  author,
  description,
  capterraReview,
}: Props) => {
  return (
    <div className="grid justify-center">
      <StyledContainer>
        <AuthorSummary
          author={author}
          description={
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
          }
        />
      </StyledContainer>
    </div>
  );
};
