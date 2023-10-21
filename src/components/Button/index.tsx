import { ButtonWrapp } from "./styled";

type ButtonProps = {
  children: React.ReactNode;
  view?: string;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  view = "regular",
  onClick,
}) => {
  return (
    <ButtonWrapp view={view} onClick={onClick}>
      {children}
    </ButtonWrapp>
  );
};
