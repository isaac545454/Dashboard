import React, { useMemo, useState } from "react";
import emoj from "../../utils/emoj";
import Emoj from "../../utils/emoj";
import Toggle from "../Toggle";
import { useTheme } from "../../hooks/theme";
import * as S from "./styles";

const Header: React.FC = () => {
  const { toggleTheme, theme } = useTheme();
  const [dark, setDark] = useState<boolean>(() =>
    theme.title === "Dark" ? true : false
  );

  const randomEmoj = useMemo(() => {
    const indice = Math.floor(Math.random() * Emoj.length);
    return emoj[indice];
  }, []);
  return (
    <S.Container>
      <Toggle
        labeLeft="Light"
        labelRight="Dark"
        checked={dark}
        onChange={() => {
          setDark((old) => !old);
          toggleTheme();
        }}
      />
      <S.Profile>
        <S.Welcome>Olá, {randomEmoj}</S.Welcome>
        <S.UserName>Isaac Gomes Matos</S.UserName>
      </S.Profile>
    </S.Container>
  );
};

export default Header;
