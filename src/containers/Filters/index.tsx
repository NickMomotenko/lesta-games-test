import { Select } from "../Select";
import { Button } from "../../components/Button";

import {
  FilterOptions,
  FiltersButton,
  FiltersControlls,
  FiltersItem,
  FiltersWrapp,
} from "./styled";

import { shipLevel, shipNations, shipTypes } from "./data";

type FiltersProps = {
  filters?: {};
  handleUpdateFilter?: () => void;
  handleClearFilters?: () => void;
  currentPage?: number;
  pages?: number;
  resetCurrentPage?: () => void;
};

export const Filters: React.FC<FiltersProps> = ({
  filters,
  handleUpdateFilter,
  handleClearFilters,
  resetCurrentPage,
}) => {
  const handleReset = () => {
    handleClearFilters();
    resetCurrentPage();
  };

  return (
    <FiltersWrapp>
      <FilterOptions>
        <FiltersItem>
          <Select
            baseTitle="Уровень"
            renderTitle={filters?.level}
            list={shipLevel}
            onClick={(value) => handleUpdateFilter("level", value)}
          />
        </FiltersItem>
        <FiltersItem>
          <Select
            baseTitle="Нация"
            renderTitle={filters?.nation}
            list={shipNations}
            onClick={(value) => handleUpdateFilter("nation", value)}
          />
        </FiltersItem>
        <FiltersItem>
          <Select
            baseTitle="Класс"
            renderTitle={filters?.type}
            list={shipTypes}
            onClick={(value) => handleUpdateFilter("type", value)}
          />
        </FiltersItem>
      </FilterOptions>
      <FiltersControlls>
        <FiltersButton>
          <Button view="ghost" onClick={handleReset}>
            Сбросить
          </Button>
        </FiltersButton>
      </FiltersControlls>
    </FiltersWrapp>
  );
};
