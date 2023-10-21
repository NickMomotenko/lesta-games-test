import { forwardRef, useState } from "react";
import { SelectDisplay, SelectItem, SelectList, SelectWrapp } from "./styled";
import { useClickOutside } from "../../hooks/useClickOutside";

type SelectProps = {
  baseTitle?: string;
  renderTitle?: string | null;
  list: string[];
  onClick?: React.Dispatch<React.SetStateAction<null | string | undefined>>;
};

export const Select: React.FC<SelectProps> = forwardRef<
  HTMLDivElement,
  SelectProps
>(({ baseTitle = "", list = [], renderTitle = "", onClick }, ref) => {
  const [isActive, setIsActive] = useState(false);

  const title = renderTitle ? renderTitle : baseTitle;

  const handleItemClick = (item: string) => {
    onClick && onClick(item);
    setIsActive(false);
  };

  useClickOutside(ref, () => setIsActive(false));

  return (
    <SelectWrapp ref={ref}>
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
});
