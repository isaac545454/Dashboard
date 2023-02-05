import React, { ButtonHTMLAttributes, InputHTMLAttributes } from "react";
import * as S from "./styles";
// import { Container } from './styles';
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}
const Button = ({ ...res }: Props) => {
  return <S.Button {...res}></S.Button>;
};

export default Button;
