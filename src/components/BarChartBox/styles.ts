import styled from "styled-components";

interface Ilegend {
  color: string;
}

export const Container = styled.div`
  width: 48%;
  min-height: 260px;
  margin: 10px 0;
  border-radius: 7px;
  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};
  display: flex;
`;

export const SideLeft = styled.aside`
  padding: 30px 20px;

  > h2 {
    margin-bottom: 10px;
    padding-left: 16px;
  }
`;

export const SideRight = styled.main`
  flex: 1;
  min-height: 150px;
  display: flex;
  justify-content: center;
  padding-top: 36px;
`;

export const LegendContainer = styled.ul`
  list-style: none;
  max-height: 170px;
  padding-left: 16px;
`;

export const Legend = styled.li<Ilegend>`
  display: flex;
  align-items: center;

  margin-bottom: 10px;
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
