import React from 'react';
import Author from '@theme/BlogPostItem/Header/Author';

export type AuthorType = {
  description?: React.ReactNode;
  imageURL: string;
  key?: string;
  name: string;
  title: string;
  url?: string;
};

type Props = {
  author: AuthorType;
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
