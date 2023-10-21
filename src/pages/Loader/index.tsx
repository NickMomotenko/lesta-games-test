import { Logo } from "../../components/Logo";
import { LoaderWrapp } from "./styled";

type LoaderProps = {
  active?: boolean;
};

export const Loader: React.FC<LoaderProps> = ({ active }) => {
  return (
    <LoaderWrapp active={active}>{active && <Logo animation />}</LoaderWrapp>
  );
};
