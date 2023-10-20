import { useState } from "react";
import { SelectDisplay, SelectItem, SelectList, SelectWrapp } from "./styled";

type SelectProps = {
  baseTitle?: string;
  renderTitle?: string | null;
  list: string[];
  onClick?: () => void;
};

export const Select: React.FC<SelectProps> = ({
  baseTitle = "",
  list = [],
  renderTitle = "",
  onClick,
}) => {
  const [isActive, setIsActive] = useState(false);

  const title = renderTitle ? renderTitle : baseTitle;

  return (
    <SelectWrapp>
      <SelectDisplay onClick={() => setIsActive(!isActive)}>
        {title}
      </SelectDisplay>
      {isActive && (
        <SelectList>
          {list?.map((item, ind) => (
            <SelectItem key={ind} onClick={() => onClick(item)}>
              {item}
            </SelectItem>
          ))}
        </SelectList>
      )}
    </SelectWrapp>
  );
};
