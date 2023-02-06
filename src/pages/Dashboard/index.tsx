import React, { useState, useMemo } from "react";
import * as S from "./styles";
import ContentHeader from "../../components/contentHeader";
import SelectInput from "../../components/SelectInput";
import { years, MonthsTotal } from "../List/moch";
import WalletBox from "../../components/WalletBox";
import expenses from "../../repositories/expenses";
import gains from "../../repositories/gains";
import MessageBox from "../../components/MessageBox";

import happy from "../../assets/happy.svg";
import sad from "../../assets/sad.svg";

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
      <S.Content>
        <WalletBox
          title="Saldo"
          amount={160.0}
          footerLabel="atualizado com base nas entradas e saida"
          icon="dolar"
          color="#4341f0"
        />
        <WalletBox
          title="entradas"
          amount={5000.0}
          footerLabel="atualizado com base nas entradas e saida"
          icon="up"
          color="#F7931B"
        />
        <WalletBox
          title="Saidas"
          amount={4850.0}
          footerLabel="atualizado com base nas entradas e saida"
          icon="down"
          color="#E44C4E"
        />
        <MessageBox
          title="Muito bem"
          description="Sua carteira está positiva"
          footerText="Continue assim, considere investir o seu saldo"
          icon={happy}
        />
      </S.Content>
    </S.Container>
  );
}
