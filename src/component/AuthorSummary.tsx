import React from 'react';
import Author from '@theme/BlogPostItem/Header/Author';

type Author = {
  description?: string;
  imageURL: string;
  key?: string;
  name: string;
  title: string;
  url?: string;
};

type Props = {
  author: Author;
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
