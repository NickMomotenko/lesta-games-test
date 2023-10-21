import { LogoIcon, LogoWrapp } from "./styled";

import logoIcon from "../../assets/logo.png";

type LogoProps = {
  animation?: boolean;
};

export const Logo: React.FC<LogoProps> = ({animation}) => {
  return (
    <LogoWrapp animation={animation}>
      <LogoIcon src={logoIcon} alt="Logo icon" />
    </LogoWrapp>
  );
};
