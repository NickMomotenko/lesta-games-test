import { ContainerWrapp } from "./styled";

type ContainerProps = {
  children: React.ReactNode;
};

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <ContainerWrapp>{children}</ContainerWrapp>;
};
