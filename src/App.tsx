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
import { Spinner } from "./components/Spinner/index.js";

export default function App() {
  const {
    fetchedData,
    renderData,
    withFilter,
    viewsCounter,
    updateDataWithFilter,
  } = useContext(DataContext);

  const { filters, handleUpdateFilter, handleClearFilters } = useFilter();
  const loader = useContext(LoaderContext);

  const { currentPage, pages, handleChangePage, resetCurrentPage } =
    usePaginator({
      initialValue: 1,
      dataLength: withFilter.length ? withFilter.length : renderData.length,
      itemsLimit: viewsCounter,
    });

  const dataToRender = () => {
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
      return withFilter?.slice(start, end);
    } else if (renderData.length) {
      return renderData?.slice(start, end);
    }
  };

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

  useEffect(() => {
    dataToRender();
  }, [currentPage]);

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
        {!fetchedData ? <Spinner /> : <ShipList data={dataToRender()} />}
      </Container>
      <Loader active={loader.active} />
    </AppWrapp>
  );
}
