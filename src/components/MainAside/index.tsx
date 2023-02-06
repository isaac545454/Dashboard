import React from "react";
import logo from "../..//assets/logo.svg";
import * as S from "./styles";
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
} from "react-icons/md";
import { ROUTES } from "../../navigation/FILEROUTES";
import { useAuth } from "../../hooks/Auth";

const Aside: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <S.Container>
      <S.Header>
        <S.LogoImg src={logo} alt="logo minha carteira " />
        <S.Title>Minha Carteira</S.Title>
      </S.Header>
      <S.MenuContainer>
        <S.MenuItemLink to={ROUTES.login}>
          <MdDashboard />
          Deshboard
        </S.MenuItemLink>
        <S.MenuItemLink to={ROUTES.list("entry-balance")}>
          <MdArrowUpward />
          Entradas
        </S.MenuItemLink>
        <S.MenuItemLink to={ROUTES.list("exit-balance")}>
          <MdArrowDownward />
          Saidas
        </S.MenuItemLink>
        <S.MenuItemLink to={ROUTES.login} onClick={signOut}>
          <MdExitToApp />
          Sair
        </S.MenuItemLink>
      </S.MenuContainer>
    </S.Container>
  );
};

export default Aside;
