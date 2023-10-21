import React, { useEffect, useState, createContext, ReactNode } from "react";
import { useQuery } from "react-query";

import { IShip } from "../components/Ship/types.js";

const endpoint = "https://vortex.korabli.su/api/graphql/glossary/";
const SHIPS_QUERY = `
  {
    vehicles {
      title
      description
      icons {
        large
        medium
      }
      level
      type {
        name
        title
        icons {
          default
        }
      }
      nation {
        name
        title
        color
        icons {
          small
          medium
          large
        }
      }
    }
  }
`;

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
  const [fetchedData, setFetchedData] = useState<IShip[]>([]);
  const [renderData, setRenderData] = useState<IShip[] | []>([]);

  const [withFilter, setWithFilter] = useState<IShip[] | []>([]);

  const [viewsCounter, setViewsCounter] = useState<number>(20);

  useQuery("launches", () => {
    return fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: SHIPS_QUERY }),
    })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Error fetching data");
        } else {
          return response.json();
        }
      })
      .then((data) => setFetchedData(data.data.vehicles));
  });

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
