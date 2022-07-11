import React, {FC} from "react";

export const TwoColumnSection: FC = (props) => <section className="grid md:grid-cols-2 gap-4 md:h-[750px] m-12">
  {props.children}
</section>;
