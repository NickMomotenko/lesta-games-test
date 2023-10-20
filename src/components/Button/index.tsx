import { ButtonWrapp } from "./styled";

type ButtonProps = {
  children: React.ReactNode;
  view?: string;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  view = "regular",
}) => {
  return <ButtonWrapp view={view}>{children}</ButtonWrapp>;
};
