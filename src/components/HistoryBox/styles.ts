import styled from "styled-components";

interface Ilegend {
  color: string;
}

export const Container = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};
  margin: 10px 0;
  padding: 30px 20px;
  border-radius: 7px;
`;

export const Headers = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;

  > h2 {
    margin-bottom: 20px;
    padding-left: 18px;
  }
`;

export const LegendContainer = styled.ul`
  list-style: none;
  display: flex;
  padding-right: 18px;
`;

export const Legend = styled.li<Ilegend>`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-right: 7px;
  align-items: center;
  > div {
    font-size: 14px;
    background-color: ${(props) => props.color};
    width: 40px;
    height: 40px;
    border-radius: 5px;
    line-height: 40px;
    text-align: center;
  }
  span {
    margin-left: 5px;
  }
`;

export const CharttContainer = styled.div`
  flex: 1;
  height: 360px;
`;
