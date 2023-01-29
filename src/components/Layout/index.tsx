import React from "react";

import * as S from "./styles";

import MainHeader from "../MainHeader";
import MainAside from "../MainAside";
import Content from "../Content";

const Layout: React.FC = () => {
  return (
    <S.Container>
      <MainHeader />
      <MainAside />
      <Content />
    </S.Container>
  );
};

export default Layout;
