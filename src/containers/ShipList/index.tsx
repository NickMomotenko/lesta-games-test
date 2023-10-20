import { Ship } from "../../components/Ship";
import { ShipListWrapp } from "./styled";

type ShipListProps = {
  data?: any;
};

export const ShipList: React.FC<ShipListProps> = ({ data }) => {

  console.log(data);
  
  return (
    <ShipListWrapp>
      {data?.map((ship: any, index: number) => (
        <Ship key={`${ship.title}-${index}`} {...ship} />
      ))}
    </ShipListWrapp>
  );
};
