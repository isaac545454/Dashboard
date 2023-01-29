import React, { useMemo } from "react";
import emoj from "../../utils/emoj";
import Emoj from "../../utils/emoj";

import * as S from "./styles";

const Header: React.FC = () => {
  const randomEmoj = useMemo(() => {
    const indice = Math.floor(Math.random() * Emoj.length);
    return emoj[indice];
  }, []);
  return (
    <S.Container>
      <h1>aa</h1>
      <S.Profile>
        <S.Welcome>Olá, {randomEmoj}</S.Welcome>
        <S.UserName>Isaac Gomes Matos</S.UserName>
      </S.Profile>
    </S.Container>
  );
};

export default Header;
