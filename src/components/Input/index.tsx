import React, { InputHTMLAttributes } from "react";
import * as S from "./style";
interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ ...rest }: Props) {
  return <S.Input {...rest} />;
}
