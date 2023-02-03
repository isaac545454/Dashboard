import React from "react";
import ContentHeader from "../../components/contentHeader";
import SelectInput from "../../components/SelectInput";
import * as S from "./styles";

export default function Dashbord() {
  const OptionsSelect = [
    { value: "isaac", label: "isaac" },
    { value: "amands", label: "amanda" },
    { value: "napolêao", label: "napoleão" },
  ];

  return (
    <S.Container>
      <ContentHeader title="Deshboard" lineColor="red">
        <SelectInput options={OptionsSelect} onChange={() => {}} />
      </ContentHeader>
      <h1>Deshboard</h1>
    </S.Container>
  );
}
