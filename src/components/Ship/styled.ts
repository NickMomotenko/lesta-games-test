import styled from "styled-components";

export const ShipWrapp = styled.div`
  background: #f9f9f9;
  border-radius: 50px;

  display: flex;
  cursor: pointer;

  margin-bottom: 15px;

  transition: 0.4s;
  padding: 20px;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    box-shadow: 0 0 10px #0000ff1f;
  }
`;

export const ShipRow = styled.div`
  display: flex;
  align-items: center;
`;

export const ShipSubtitle = styled.div`
  margin-left: 5px;
  color: #8b7070;
`;

export const ShipImageWrapp = styled.div``;

export const ShipImage = styled.img``;

export const ShipContent = styled.div``;

export const ShipTitle = styled.div`
  font-weight: 700;
  text-align: center;
  font-size: 40px;
  margin-top: 10px;
`;

export const ShipClass = styled(ShipRow)``;

export const ShipNation = styled.div``;

export const ShipDescription = styled.p`
  font-size: 15px;
  line-height: 20px;
  color: #9e6f6f;
  margin-top: 15px;
`;

export const ShipMiniIcon = styled.img``;

export const ShipLevel = styled(ShipSubtitle)``;

export const ShipNationTitle = styled(ShipSubtitle)`
  font-weight: 700;
  font-size: 20px;
  color: #000;
`;

export const ShipHeader = styled(ShipRow)`
  margin-bottom: 15px;
  align-items: flex-start;
`;

export const ShipInfo = styled.div`
  margin-left: 20px;
`;
