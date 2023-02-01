import React from "react";
import * as S from "./styles";
import ContentHeader from "../../components/contentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import { ListOptions } from "./moch";

export default function List() {
  const Months = [
    { value: 7, label: "julho" },
    { value: 8, label: "agosto" },
    { value: 9, label: "novembro" },
  ];

  const years = [
    { value: 2023, label: 2023 },
    { value: 2022, label: 2022 },
    { value: 2021, label: 2021 },
  ];

  return (
    <S.Container>
      <ContentHeader title="Saidas" lineColor="red">
        <SelectInput options={years} />
        <SelectInput options={Months} />
      </ContentHeader>
      <S.Filter>
        <button type="button" className="tag-filter tag-filter-recurrent">
          Recorrentes
        </button>
        <button type="button" className="tag-filter tag-filter-eventual">
          Eventuais
        </button>
      </S.Filter>
      <S.Content>
        {ListOptions.map((item, index) => (
          <HistoryFinanceCard
            title={item.title}
            subTitle={item.subTitle}
            amount={item.amount}
            tagColor={item.tagColor}
            key={index}
          />
        ))}
      </S.Content>
    </S.Container>
  );
}
