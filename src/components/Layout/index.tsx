import React from "react";

import * as S from "./styles";

import MainHeader from "../MainHeader";
import MainAside from "../MainAside";
import Content from "../Content";

interface Props {
  children: JSX.Element;
}

const Layout = ({ children }: Props) => {
  return (
    <S.Container>
      <MainHeader />
      <MainAside />
      <Content>{children}</Content>
    </S.Container>
  );
};

export default Layout;
