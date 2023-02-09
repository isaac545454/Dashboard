import styled, { keyframes } from "styled-components";

interface IcontainerProps {
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

export const Container = styled.div<IcontainerProps>`
  background-color: ${(props) => props.color};
  width: 32%;
  height: 150px;
  margin: 10px 0;
  color: ${(props) => props.theme.colors.white};
  border-radius: 7px;
  padding: 10px 20px;
  position: relative;
  overflow: hidden;
  animation: ${animate} 0.5s;

  > img {
    position: absolute;
    height: 110%;
    top: -10px;
    right: -20px;
    opacity: 0.3;
  }
  span {
    font-size: 18px;
    font-weight: 500;
  }
  small {
    font-size: 12px;
    position: absolute;
    bottom: 10px;
  }

  @media (max-width: 770px) {
    width: 100%;
  }
  > span {
    font-size: 14px;
  }
  > h1 {
    word-wrap: break-word;
    font-size: 20px;
  }
`;

export const Count = styled.div`
  margin-top: 20px 0;
  > span {
    font-size: 32px;
  }
`;
