import { useState } from "react";
import { Select } from "../Select";
import { FiltersButton, FiltersItem, FiltersWrapp } from "./styled";
import { Button } from "../../components/Button";

type FiltersProps = {};

export const Filters: React.FC<FiltersProps> = () => {
  const [level, setLevel] = useState(null);
  const [nation, setNation] = useState(null);
  const [type, setType] = useState(null);

  return (
    <FiltersWrapp>
      <FiltersItem>
        <Select
          baseTitle="Уровень"
          renderTitle={level}
          list={["1", "2", "3"]}
          onClick={setLevel}
        />
      </FiltersItem>
      <FiltersItem>
        <Select
          baseTitle="Нация"
          renderTitle={level}
          list={["1", "2", "3"]}
          onClick={setLevel}
        />
      </FiltersItem>
      <FiltersItem>
        <Select
          baseTitle="Класс"
          renderTitle={level}
          list={["1", "2", "3"]}
          onClick={setLevel}
        />
      </FiltersItem>
      <FiltersButton>
        <Button>Применить</Button>
        <Button view="ghost">Сбросить</Button>
      </FiltersButton>
    </FiltersWrapp>
  );
};
