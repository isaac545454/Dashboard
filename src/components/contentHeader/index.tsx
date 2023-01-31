import React from "react";
import SelectInput from "../../components/SelectInput";
import * as S from "./styles";

const contentHeader: React.FC = () => {
  const OptionsSelect = [
    { value: "isaac", label: "isaac" },
    { value: "amands", label: "amanda" },
    { value: "napolêao", label: "napoleão" },
  ];
  return (
    <S.Container>
      <S.TitleContainer>
        <h1>Titulo</h1>
      </S.TitleContainer>
      <S.Controllers>
        <SelectInput options={OptionsSelect} />
        <SelectInput options={OptionsSelect} />
      </S.Controllers>
    </S.Container>
  );
};

export default contentHeader;
