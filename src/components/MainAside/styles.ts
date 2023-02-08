import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

interface IcontainerProps {
  menIsOpen: boolean;
}

export const Container = styled.div<IcontainerProps>`
  grid-area: AS;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};
  border-right: 1px solid ${(props) => props.theme.colors.gray};
  position: relative;

  @media (max-width: 688px) {
    padding-left: 7px;
    position: fixed;
    z-index: 2;
    height: ${(props) => (props.menIsOpen ? "100vh" : "70px")};
    overflow: hidden;
    ${(props) =>
      !props.menIsOpen &&
      css`
        border: none;
        border-bottom: 1px solid ${(props) => props.theme.colors.gray};
      `};
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.colors.white};
  margin-left: 10px;

  @media (max-width: 688px) {
    display: none;
  }
`;

export const LogoImg = styled.img`
  height: 40px;
  width: 40px;

  @media (max-width: 688px) {
    display: none;
  }
`;

export const MenuContainer = styled.nav`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 50px 35px;
`;

export const MenuItemLink = styled(Link)`
  color: ${(props) => props.theme.colors.info};
  transition: 0.4s;
  margin: 7px 0;
  display: flex;
  align-items: center;
  &:hover {
    opacity: 0.7;
  }
  > svg {
    font-size: 18px;
    margin-right: 5px;
  }
`;

export const ToggleMenu = styled.button``;
