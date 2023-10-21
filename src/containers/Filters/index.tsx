import React, { useEffect } from "react";

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
import { useClickOutside } from "../../hooks/useClickOutside";

type FiltersProps = {
  filters?: {
    level?: string;
    nation?: string;
    type?: string;
  };
  handleUpdateFilter?: (key: string, value: string) => void;
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
  const levelRef = React.useRef<any>();
  const nationRef = React.useRef<any>();
  const typeRef = React.useRef<any>();

  const handleReset = () => {
    handleClearFilters && handleClearFilters();
    resetCurrentPage && resetCurrentPage();
  };

  return (
    <FiltersWrapp>
      <FilterOptions>
        <FiltersItem>
          <Select
            baseTitle="Уровень"
            renderTitle={filters?.level}
            list={shipLevel}
            ref={levelRef}
            onClick={(value) =>
              handleUpdateFilter && handleUpdateFilter("level", value)
            }
          />
        </FiltersItem>
        <FiltersItem>
          <Select
            baseTitle="Нация"
            renderTitle={filters?.nation}
            list={shipNations}
            ref={nationRef}
            onClick={(value) =>
              handleUpdateFilter && handleUpdateFilter("nation", value)
            }
          />
        </FiltersItem>
        <FiltersItem>
          <Select
            baseTitle="Класс"
            renderTitle={filters?.type}
            list={shipTypes}
            ref={typeRef}
            onClick={(value) =>
              handleUpdateFilter && handleUpdateFilter("type", value)
            }
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
