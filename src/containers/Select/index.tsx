import { useState } from "react";
import { SelectDisplay, SelectItem, SelectList, SelectWrapp } from "./styled";

type SelectProps = {
  baseTitle?: string;
  renderTitle?: string | null;
  list: string[];
  onClick?: React.Dispatch<React.SetStateAction<null | string | undefined>>;
};

export const Select: React.FC<SelectProps> = ({
  baseTitle = "",
  list = [],
  renderTitle = "",
  onClick,
}) => {
  const [isActive, setIsActive] = useState(false);

  const title = renderTitle ? renderTitle : baseTitle;

  const handleItemClick = (item: string) => {
    onClick(item);
    setIsActive(false);
  };

  return (
    <SelectWrapp>
      <SelectDisplay onClick={() => setIsActive(!isActive)}>
        {title}
      </SelectDisplay>
      {isActive && (
        <SelectList>
          {list?.map((item: string, ind: number) => (
            <SelectItem key={ind} onClick={() => handleItemClick(item)}>
              {item}
            </SelectItem>
          ))}
        </SelectList>
      )}
    </SelectWrapp>
  );
};
