import React, { useState } from "react";
import logo from "../..//assets/logo.svg";
import * as S from "./styles";
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
  MdClose,
  MdMenu,
} from "react-icons/md";
import { ROUTES } from "../../navigation/FILEROUTES";
import { useAuth } from "../../hooks/Auth";

const Aside: React.FC = () => {
  const { signOut } = useAuth();
  const [modal, setModal] = useState<boolean>(false);
  return (
    <S.Container menIsOpen={modal}>
      <S.Header>
        <S.ToggleMenu onClick={(old) => setModal(!modal)}>
          {modal ? <MdClose /> : <MdMenu />}
        </S.ToggleMenu>
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
