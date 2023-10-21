import { useState } from "react";

export const useFilter = () => {
  const [filters, setFilters] = useState({
    level: "",
    nation: "",
    type: "",
  });

  const handleUpdateFilter = (key: string, value: number) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleClearFilters = () => {
    setFilters({
      level: "",
      nation: "",
      type: "",
    });
  };

  return { filters, handleClearFilters, handleUpdateFilter };
};
