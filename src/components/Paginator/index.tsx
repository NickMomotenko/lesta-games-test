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
  return (
    <PaginatorWrapp>
      <Select
        list={Array.from({ length: pagesCounter }, (_, i) => i + 1)}
        baseTitle="1"
        renderTitle={currentPage}
        onClick={handleChangePage}
      />
    </PaginatorWrapp>
  );
};
