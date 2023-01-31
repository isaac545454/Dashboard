import React from "react";
import * as S from "./styles";

interface IProps {
  children?: React.ReactNode;
  options: IOptions[];
}

type IOptions = {
  value: string | number;
  label: string | number;
};

export default function SelectInput(props: IProps) {
  const { options } = props;
  return (
    <S.Container>
      <select>
        <>
          {options.map((item) => (
            <option value={item.value} key={item.value}>
              {item.label}
            </option>
          ))}
        </>
      </select>
    </S.Container>
  );
}
