import React from "react";
import logo from "../..//assets/logo.svg";
import * as S from "./styles";

const Aside: React.FC = () => {
  return (
    <S.Container>
      <S.Header>
        <S.LogoImg src={logo} alt="logo minha carteira " />
        <S.Title>Minha Carteira</S.Title>
      </S.Header>
      <S.MenuContainer>
        <S.MenuItemLink to="">Deshboard</S.MenuItemLink>
        <S.MenuItemLink to="">Entradas</S.MenuItemLink>
        <S.MenuItemLink to="">Saidas</S.MenuItemLink>
        <S.MenuItemLink to="">Sair</S.MenuItemLink>
      </S.MenuContainer>
    </S.Container>
  );
};

export default Aside;
