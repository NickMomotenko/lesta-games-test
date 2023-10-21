import styled from "styled-components";

export const SelectWrapp = styled.div`
  display: inline-block;
  min-width: 115px;
  position: relative;
`;

export const SelectList = styled.ul`
  border-radius: 10px;
  margin-top: 5px;
  overflow: hidden;
  box-shadow: 0 0 5px #ebdcdcc7;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;

  max-height: 350px;
  overflow-y: auto;
`;

export const SelectItem = styled.li`
  padding: 10px 25px;
  text-align: center;
  transition: background 0.4s;
  border-bottom: 1px solid #f9f9f9;

  &:hover {
    background: #f9f9f9;
    cursor: pointer;
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const SelectDisplay = styled.div`
  padding: 10px 25px;
  border-radius: 10px;
  cursor: pointer;
  background: #f9f9f9;
  text-align: center;
`;
