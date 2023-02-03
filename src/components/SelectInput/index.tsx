import React, { SelectHTMLAttributes } from "react";
import * as S from "./styles";

interface IProps extends SelectHTMLAttributes<HTMLSelectElement> {
  children?: React.ReactNode;
  options: IOptions[];
  // onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  // defaultValue?: string | number;
}

type IOptions = {
  value: string | number;
  label: string | number;
};

export default function SelectInput(props: IProps) {
  const { options, ...res } = props;
  return (
    <S.Container>
      <select {...res}>
        <>
          {options.map((item) => (
            <option value={item.value} key={Math.random()}>
              {item.label}
            </option>
          ))}
        </>
      </select>
    </S.Container>
  );
}
