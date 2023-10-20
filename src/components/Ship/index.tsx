import {
  ShipWrapp,
  ShipImageWrapp,
  ShipImage,
  ShipContent,
  ShipTitle,
  ShipClass,
  ShipLevel,
  ShipNation,
  ShipDescription,
  ShipMiniIcon,
  ShipSubtitle,
  ShipNationTitle,
  ShipHeader,
  ShipInfo,
} from "./styled";

type ShipProps = {};

export const Ship: React.FC<ShipProps> = ({
  title,
  icons,
  type,
  nation,
  level,
  description,
}) => {
  return (
    <ShipWrapp>
      <ShipImageWrapp>
        <ShipImage alt={`ship-${title}`} src={icons.medium} />
      </ShipImageWrapp>
      <ShipContent>
        <ShipHeader>
          <ShipNation>
            <ShipMiniIcon
              src={nation.icons.small}
              alt={`${nation.name}-icon`}
            />
            <ShipTitle>{title}</ShipTitle>
          </ShipNation>
          <ShipInfo>
            <ShipNationTitle>{nation.title}</ShipNationTitle>
            <ShipClass>
              <ShipMiniIcon
                src={type.icons.default}
                alt={`${type.name}-icon`}
              />
              <ShipSubtitle>{type.name}</ShipSubtitle>
            </ShipClass>
            <ShipLevel>{level} уровень</ShipLevel>
          </ShipInfo>
        </ShipHeader>
        <ShipDescription>{description}</ShipDescription>
      </ShipContent>
    </ShipWrapp>
  );
};