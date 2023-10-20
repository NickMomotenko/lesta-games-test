import {
  ShipCardWrapp,
  ShipCardImageWrapp,
  ShipCardImage,
  ShipCardContent,
  ShipCardTitle,
  ShipCardClass,
} from "./styled";

export const ShipCard = () => {
  return (
    <ShipCardWrapp>
      <ShipCardImageWrapp>
        <ShipCardImage alt="ffff" />
      </ShipCardImageWrapp>
      <ShipCardContent>
        <ShipCardTitle>Имя корабля</ShipCardTitle>
        <ShipCardClass>Класс корабля</ShipCardClass>
        <ShipCardNation>Нация корабля</ShipCardNation>
        <ShipCardLevel>Level корабля</ShipCardLevel>
      </ShipCardContent>
    </ShipCardWrapp>
  );
};
