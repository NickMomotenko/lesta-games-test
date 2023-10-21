import { useEffect, useState } from "react";

type PaginatorProps = {
  initialValue?: number;
  itemsLimit?: number;
  dataLength: number;
};

export const usePaginator = ({
  initialValue = 1,
  itemsLimit = 1,
  dataLength,
}: PaginatorProps) => {
  const [currentPage, setCurrentPage] = useState(initialValue ?? 1);
  const [pages, setPages] = useState<number>(1);

  useEffect(() => {
    const pagesCounter = dataLength / itemsLimit;

    setPages(Math.round(pagesCounter));
  }, [dataLength]);

  const resetCurrentPage = () => {
    setCurrentPage(1);
  };

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  return { currentPage, pages, resetCurrentPage, handleChangePage };
};
