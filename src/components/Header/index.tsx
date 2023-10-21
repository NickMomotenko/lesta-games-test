import { HeaderWrapp } from "./styled";

type HeaderProps = {
  children: React.ReactNode;
};

export const Header: React.FC<HeaderProps> = ({ children }) => {
  return <HeaderWrapp>{children}</HeaderWrapp>;
};
