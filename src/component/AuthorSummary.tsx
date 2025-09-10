import Author from '@theme/Blog/Components/Author';
import React from 'react';

type Props = {
  author: React.ComponentProps<typeof Author>['author'];
  description?: React.ReactNode;
};

export const AuthorSummary = ({ author, description }: Props) => {
  return (
    <div className="flex flex-col gap-2 my-4 px-4">
      <Author author={author} />
      {description && <div className="text-md">{description}</div>}
    </div>
  );
};
