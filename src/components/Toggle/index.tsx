import React from "react";
import * as S from "./styles";

const Toggle: React.FC = () => {
  return (
    <>
      <S.Container>
        <S.ToggleLabel>Ligth</S.ToggleLabel>
        <S.ToggleSwitch
          checked
          uncheckedIcon={false}
          checkedIcon={false}
          onChange={() => {
            console.log("aa");
          }}
        />
        <S.ToggleLabel>Dark</S.ToggleLabel>
      </S.Container>
    </>
  );
};

export default Toggle;
