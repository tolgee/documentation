import Author from '@theme/Blog/Components/Author';
import React from 'react';

type Props = {
  author: React.ComponentProps<typeof Author>['author'];
};

export const AuthorSummary = ({ author }: Props) => {
  return (
    <div className="flex flex-col gap-2 my-4 px-4">
      <Author author={author} />
      {author.description && (
        <div className="text-md">{author.description}</div>
      )}
    </div>
  );
};
