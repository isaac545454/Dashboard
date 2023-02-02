import React, { useMemo } from "react";
import * as S from "./styles";
import ContentHeader from "../../components/contentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import { ListOptions } from "./moch";
import { useParams } from "react-router";
import expenses from "../../repositories/expenses";
import gains from "../../repositories/gains";

export default function List() {
  const { type } = useParams();
  const typeNavigate = useMemo(() => {
    return type === "entry-balance"
      ? {
          title: "Entradas",
          lineColor: "#f7931b",
          options: gains,
        }
      : {
          title: "Saidas",
          lineColor: "#e44c4e",
          options: expenses,
        };
  }, [type]);

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
      <ContentHeader
        title={typeNavigate.title}
        lineColor={typeNavigate.lineColor}
      >
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
        {typeNavigate.options.map((item, index) => (
          <HistoryFinanceCard
            title={item.description}
            subTitle={item.date}
            amount={item.amount}
            key={index}
            tagColor={item.frequency === "recorrente" ? "#4e41f0" : "#e44c4e"}
          />
        ))}
      </S.Content>
    </S.Container>
  );
}
