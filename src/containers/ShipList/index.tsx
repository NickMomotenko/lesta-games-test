import { Ship } from "../../components/Ship";
import { IShip } from "../../components/Ship/types";
import { ShipListWrapp, ShipNoData } from "./styled";

type ShipListProps = {
  data?: IShip[];
};

export const ShipList: React.FC<ShipListProps> = ({ data }) => {
  return (
    <ShipListWrapp>
      {data?.length ? (
        data?.map((ship: any, index: number) => (
          <Ship key={`${ship.title}-${index}`} {...ship} />
        ))
      ) : (
        <ShipNoData>Не удалось ничего найти</ShipNoData>
      )}
    </ShipListWrapp>
  );
};
