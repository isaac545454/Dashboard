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
import { useTheme } from "../../hooks/theme";
import Toggle from "../Toggle";

const Aside: React.FC = () => {
  const { signOut } = useAuth();
  const { toggleTheme, theme } = useTheme();
  const [modal, setModal] = useState<boolean>(false);
  const [dark, setDark] = useState(() =>
    theme.title === "Dark" ? true : false
  );

  return (
    <S.Container menIsOpen={modal}>
      <S.Header>
        <S.ToggleMenu onClick={() => setModal(!modal)}>
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
      <S.ThemeToggleFooter menuIsOpen={modal}>
        <Toggle
          labeLeft=""
          labelRight=""
          checked={dark}
          onChange={() => {
            setDark((old) => !old);
            toggleTheme();
          }}
        />
      </S.ThemeToggleFooter>
    </S.Container>
  );
};

export default Aside;
