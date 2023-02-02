import styled, { StyledProps } from "styled-components";

interface Icontainer {
  color: string;
}

export const Container = styled.li`
  background-color: ${(props) => props.theme.colors.tertiary};
  border-radius: 10px;
  margin: 10px 0;
  padding: 12px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;

  &:hover {
    opacity: 0.7;
    transform: translateX(10px);
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 12px;
  }
  > div span {
    font-weight: 500;
    font-size: 22px;
  }
`;

export const Tag = styled.div<Icontainer>`
  position: absolute;
  width: 10px;
  left: 0;
  height: 60%;
  background-color: ${(props) => props.color};
`;
