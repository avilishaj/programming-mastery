// rafce
import { ReactNode } from "react";
interface Props {
  text: ReactNode;
}
const Alert = ({ text }: Props) => {
  return <div>{text}</div>;
};
export default Alert;
