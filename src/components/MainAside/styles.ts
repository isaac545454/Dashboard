import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  grid-area: AS;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};
  border-right: 1px solid ${(props) => props.theme.colors.gray};
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
`;

export const LogoImg = styled.img`
  height: 40px;
  width: 40px;
`;

export const MenuContainer = styled.nav`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`;

export const MenuItemLink = styled(Link)`
  color: ${(props) => props.theme.colors.info};
  transition: 0.4s;
  margin: 7px 0;

  &:hover {
    opacity: 0.7;
  }
`;
