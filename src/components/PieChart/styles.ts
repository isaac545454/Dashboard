import styled, { keyframes, Keyframes } from "styled-components";

interface Ilegend {
  color: string;
}

const animate = keyframes`
 0%{
  transform: translateX(100px)
 }
 50%{
  opacity: 0.3
 }
 100%{
  transform: translateX(0px);
  opacity: 1;
 }

`;
export const Container = styled.div`
  width: 48%;
  height: 260px;
  margin: 10px 0;
  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};
  border-radius: 7px;
  display: flex;
  animation: ${animate} 0.5s;

  @media (max-width: 460px) {
    width: 100%;
  }
`;

export const SideLeft = styled.aside`
  padding: 30px 20px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.secondary};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.tertiary};
  }

  > h2 {
    margin-bottom: 20px;
  }
`;

export const LegendContainer = styled.ul`
  list-style: none;
  max-height: 170px;
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

export const SideRight = styled.main`
  display: flex;
  flex: 1;
  justify-content: center;
`;
