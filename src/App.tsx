import { useQuery } from "react-query";
import { AppWrapp } from "./AppStyled";
import { ShipList } from "./containers/ShipList";
import { Container } from "./components/Container";
import { Filters } from "./containers/Filters";
import { useContext, useEffect } from "react";

import { DataContext } from "./context/DataContext.js";
import { useFilter } from "./hooks/useFilter.js";
import { Loader } from "./pages/Loader/index.js";
import { usePaginator } from "./hooks/usePaginator.js";
import { Header } from "./components/Header/index.js";
import { Paginator } from "./components/Paginator/index.js";
import { LoaderContext } from "./context/LoaderContext.js";

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

export default function App() {
  const { renderData, withFilter, viewsCounter, updateDataWithFilter } =
    useContext(DataContext);

  const { filters, handleUpdateFilter, handleClearFilters } = useFilter();
  const loader = useContext(LoaderContext);

  const { currentPage, pages, handleChangePage, resetCurrentPage } =
    usePaginator({
      initialValue: 1,
      dataLength: withFilter.length ? withFilter.length : renderData.length,
      itemsLimit: viewsCounter,
    });

  useEffect(() => {
    let updated = [...renderData];

    if (filters.level) {
      updated = updated.filter((ship) => ship?.level === Number(filters.level));
    }

    if (filters.nation) {
      updated = updated.filter((ship) => ship?.nation.name === filters.nation);
    }

    if (filters.type) {
      updated = updated.filter((ship) => ship?.type?.name === filters.type);
    }
    resetCurrentPage();
    updateDataWithFilter(updated);
  }, [filters]);

  // useEffect(() => {
  //   setRenderData(fetchedData);
  // }, [fetchedData]);

  // const { data, isLoading, error } = useQuery("launches", () => {
  //   return fetch(endpoint, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ query: SHIPS_QUERY }),
  //   })
  //     .then((response) => {
  //       if (response.status >= 400) {
  //         throw new Error("Error fetching data");
  //       } else {
  //         return response.json();
  //       }
  //     })
  //     .then((data) => setFetchedData(data.data));
  // });

  useEffect(() => {
    dataToRender();
  }, [currentPage]);

  function dataToRender() {
    let start;
    let end;

    if (currentPage === 1) {
      start = 0;
      end = viewsCounter;
    } else {
      start = (currentPage - 1) * viewsCounter;
      end = start + viewsCounter;
    }

    if (withFilter.length) {
      return withFilter.slice(start, end);
    } else {
      return renderData.slice(start, end);
    }
  }

  return (
    <AppWrapp>
      <Container>
        <Header>
          <Filters
            filters={filters}
            handleUpdateFilter={handleUpdateFilter}
            handleClearFilters={handleClearFilters}
            resetCurrentPage={resetCurrentPage}
          />
          <Paginator
            pagesCounter={pages}
            currentPage={currentPage}
            handleChangePage={handleChangePage}
          />
        </Header>
        <ShipList data={dataToRender()} />
      </Container>
      <Loader active={loader.active} />
    </AppWrapp>
  );
}
