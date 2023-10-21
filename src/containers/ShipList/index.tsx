import { Ship } from "../../components/Ship";
import { IShip } from "../../components/Ship/types";
import { ShipListContent, ShipListWrapp, ShipNoData } from "./styled";

type ShipListProps = {
  data?: IShip[];
};

export const ShipList: React.FC<ShipListProps> = ({ data }) => {
  return (
    <ShipListWrapp>
      <ShipListContent>
        {data?.length ? (
          data?.map((ship: IShip, index: number) => (
            <Ship as="li" key={`${ship.title}-${index}`} {...ship} />
          ))
        ) : (
          <ShipNoData>Не удалось ничего найти</ShipNoData>
        )}
      </ShipListContent>
    </ShipListWrapp>
  );
};
