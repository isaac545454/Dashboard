import React, { useState, useMemo } from "react";
import ContentHeader from "../../components/contentHeader";
import SelectInput from "../../components/SelectInput";
import * as S from "./styles";
import { years, MonthsTotal } from "../List/moch";
import expenses from "../../repositories/expenses";
import gains from "../../repositories/gains";

export default function Dashbord() {
  const [monthSelected, setMounthSelected] = useState<string>("1");
  const [yearSelected, setYearSelected] = useState<string>("2020");

  return (
    <S.Container>
      <ContentHeader title="Deshboard" lineColor="#4341f0">
        <SelectInput
          options={years}
          onChange={(e) => {
            setYearSelected(String(e.target.value));
          }}
          value={yearSelected}
        />
        <SelectInput
          options={MonthsTotal}
          onChange={(e) => {
            setMounthSelected(String(e.target.value));
          }}
          value={monthSelected}
        />
      </ContentHeader>
      <h1>Deshboard</h1>
    </S.Container>
  );
}
