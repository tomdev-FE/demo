import * as React from "react";
import { match } from "ts-pattern";
import A from "./a";
import B from "./b";
import C from "./c";

type Props = {
  status: "loading" | "success" | "error";
};
export const MatchComponent: React.FC<Props> = ({ status }) => {
  return (
    <div>
      {match(status)
        .with("loading", () => <A />)
        .with("success", () => <B />)
        .with("error", () => <C />)
        .exhaustive()}
    </div>
  );
};

// import React from "react";

// type Props = React.ComponentPropsWithoutRef<"button">;

// const Button = ({children, onClick, type}: Props) => {
// return(
//     <button>
//         {children}
//     </button>
// )
// }

// export default Button

// import React from "react";

// type Props = React.PropsWithChildren<{
//   as: "div" | "section" | "aside";
// }>;

// function Container({ as: Component, children }: Props) {
//   return <Component className={styles.container}>{children}</Component>;
// }

// <Container as="aside">
//   <p>section content</p>
// </Container>

// type Take = (a:string) => void;

// const func: Take = ()=>{}
