import React from "react";
import * as S from "./styles";

interface IProps {
  labeLeft: string;
  labelRight: string;
  checked: boolean;
  onChange: () => void;
}

const Toggle = (props: IProps) => {
  const { checked, labeLeft, onChange, labelRight } = props;
  return (
    <>
      <S.Container>
        <S.ToggleLabel>{labeLeft}</S.ToggleLabel>
        <S.ToggleSwitch
          checked={checked}
          uncheckedIcon={false}
          checkedIcon={false}
          onChange={onChange}
        />
        <S.ToggleLabel>{labelRight}</S.ToggleLabel>
      </S.Container>
    </>
  );
};

export default Toggle;
