// shortcut "rafce" react arrow function component export
import { ReactNode } from "react";

interface Props {
  // children is supported by all Props
  children: ReactNode;
  // using the :ReactNode annotation to pass html tags as children
}
function Alert({ children }: Props) {
    return <div>{children}</div>;
}

export default Alert;
