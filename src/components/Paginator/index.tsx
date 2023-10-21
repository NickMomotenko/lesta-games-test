import React from "react";
import { Select } from "../../containers/Select";
import { PaginatorWrapp } from "./styled";

type PaginatorProps = {
  pagesCounter?: number;
  currentPage?: number;
  handleChangePage?: () => {};
};

export const Paginator: React.FC<PaginatorProps> = ({
  pagesCounter,
  currentPage,
  handleChangePage,
}) => {
  const paginatorRef = React.useRef<any>();

  return (
    <PaginatorWrapp>
      <Select
        list={Array.from({ length: pagesCounter }, (_, i) => i + 1)}
        baseTitle="1"
        renderTitle={currentPage?.toString()}
        ref={paginatorRef}
        onClick={handleChangePage}
      />
    </PaginatorWrapp>
  );
};
