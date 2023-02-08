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
  @media (max-width: 1200px) {
    flex-direction: column;
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
  margin-left: 20px;
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
  @media (max-width: 1200px) {
    > div {
      width: 20px;
      height: 20px;
    }
  }
`;

export const CharttContainer = styled.div`
  flex: 1;
  height: 300px;
`;
