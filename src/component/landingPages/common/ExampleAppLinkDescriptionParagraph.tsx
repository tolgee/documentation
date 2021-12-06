import React, {FC} from "react";

export const ExampleAppLinkDescriptionParagraph: FC<{
  technologyName: string
  repoName: string
}> = (props) => {
  return (
    <p>
      To see Next with {props.technologyName} in action, check{" "}
      <a href={`https://github.com/tolgee/${props.repoName}`}>
        this example app
      </a>
      .
    </p>
  )
}
