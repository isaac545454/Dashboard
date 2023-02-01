import React from "react";
import * as S from "./styles";
import ContentHeader from "../../components/contentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import { ListOptions } from "./moch";

export default function List() {
  const OptionsSelect = [
    { value: "isaac", label: "isaac" },
    { value: "amands", label: "amanda" },
    { value: "napolêao", label: "napoleão" },
  ];

  return (
    <S.Container>
      <ContentHeader title="Saidas" lineColor="red">
        <SelectInput options={OptionsSelect} />
      </ContentHeader>
      <S.Content>
        {ListOptions.map((item, index) => (
          <HistoryFinanceCard
            title={item.title}
            subTitle={item.subTitle}
            cardColor={item.cardColor}
            amount={item.amount}
            tagColor={item.tagColor}
            key={index}
          />
        ))}
      </S.Content>
    </S.Container>
  );
}
