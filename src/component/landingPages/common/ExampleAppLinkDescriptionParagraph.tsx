import React, { FC } from 'react';

export const ExampleAppLinkDescriptionParagraph: FC<{
  technologyName: string;
  repoName: string;
}> = (props) => {
  return (
    <p>
      To see {props.technologyName} with Tolgee in action, check{' '}
      <a href={`https://github.com/tolgee/${props.repoName}`}>
        this example app
      </a>
      .
    </p>
  );
};
