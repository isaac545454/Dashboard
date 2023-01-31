import React from "react";
import * as S from "./styles";

interface IProps {
  title: string;
  lineColor: string;
  children: React.ReactNode;
}

const contentHeader = (props: IProps) => {
  const { title, lineColor, children } = props;

  return (
    <S.Container>
      <S.TitleContainer lineColor={lineColor}>
        <h1>{title}</h1>
      </S.TitleContainer>
      <S.Controllers>{children}</S.Controllers>
    </S.Container>
  );
};

export default contentHeader;
