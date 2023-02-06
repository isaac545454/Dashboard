import React, { ButtonHTMLAttributes } from "react";
import * as S from "./styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}
const Button = ({ ...res }: Props) => {
  return <S.Button {...res}></S.Button>;
};

export default Button;
