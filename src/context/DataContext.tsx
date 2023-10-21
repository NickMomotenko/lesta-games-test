import React, { useEffect, useState, createContext, ReactNode } from "react";

import { data } from "../data.js";
import { IShip } from "../components/Ship/types.js";

interface DataContextProps {
  fetchedData: IShip[];
  renderData: IShip[];
  withFilter: [];
  updateRenderData: () => void;
  viewsCounter: number;
  setViewsCounter: React.Dispatch<React.SetStateAction<number>>;
}

interface DataProviderProps {
  children: ReactNode;
}

export const DataContext = createContext<DataContextProps>({
  fetchedData: [],
  renderData: [],
  withFilter: [],
  updateRenderData: function (): void {
    throw new Error("Function not implemented.");
  },
  viewsCounter: 0,
  setViewsCounter: () => {},
});

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [fetchedData, setFetchedData] = useState<IShip[]>(data || []);
  const [renderData, setRenderData] = useState<IShip[] | []>([]);

  const [withFilter, setWithFilter] = useState<IShip[] | []>([]);

  const [viewsCounter, setViewsCounter] = useState<number>(20);

  useEffect(() => {
    if (fetchedData) {
      setRenderData(fetchedData);
    }
  }, [fetchedData]);

  const updateRenderData = (updated: any) => {
    setRenderData(updated);
  };

  const updateDataWithFilter = (data: any) => {
    setWithFilter(data);
  };

  return (
    <DataContext.Provider
      value={{
        fetchedData,
        renderData,
        withFilter,

        updateRenderData,
        updateDataWithFilter,

        viewsCounter,
        setViewsCounter,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
