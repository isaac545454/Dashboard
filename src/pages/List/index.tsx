import React, { useEffect, useMemo, useState } from "react";
import * as S from "./styles";
import ContentHeader from "../../components/contentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import { useParams } from "react-router";
import expenses from "../../repositories/expenses";
import gains from "../../repositories/gains";
import { formatCurrency } from "../../utils/FormatCurrency";
import { format } from "date-fns";
import { log } from "console";
import { assertModuleDeclaration } from "@babel/types";
//format(new Date(), "dd MMMM yyyy"),

interface IDate {
  description: string;
  amount: string | number;
  type?: string;
  frequency: string;
  date: string | Date;
}

export default function List() {
  const { type } = useParams();

  const [monthSelected, setMounthSelected] = useState<string>("1");
  const [yearSelected, setYearSelected] = useState<string>("2020");
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
  const [Data, setDate] = useState<IDate[]>([]);
  const Months = [
    { value: "1", label: "janeiro" },
    { value: "2", label: "fevereiro" },
    { value: "3", label: "março" },
  ];

  const years = [
    { value: 2020, label: 2020 },
    { value: 2021, label: 2021 },
  ];

  useEffect(() => {
    if (Data) {
      const filterDate = typeNavigate.options.filter((item) => {
        const date = new Date(item.date);
        const mount = String(date.getMonth() + 1);
        const year = String(date.getFullYear());
        const SelectedMounth = String(monthSelected);
        const SelectedYear = String(yearSelected);
        console.log(mount === SelectedMounth && year === SelectedYear);
        console.log({
          mount,
          SelectedMounth,
          year,
          SelectedYear,
        });
        return mount === SelectedMounth && year === SelectedYear;
      });
      const formatedDate: IDate[] = filterDate.map((item) => {
        console.log({
          description: item.description,
          amount: formatCurrency(Number(item.amount)),
          frequency: item.frequency,
          date: new Date(item.date),
          tagColor: item.frequency === "recorrente" ? "#4e41f0" : "#e44c4e",
        });

        return {
          description: item.description,
          amount: item.amount,
          frequency: item.frequency,
          date: item.date,
          tagColor: item.frequency === "recorrente" ? "#4e41f0" : "#e44c4e",
        };
      });
      // console.log(formatedDate);
      // console.log(filterDate);

      setDate(formatedDate);
    }
  }, [monthSelected, yearSelected, Data, typeNavigate.options]);

  useEffect(() => {
    setDate(typeNavigate.options);
  }, []);
  return (
    <S.Container>
      <ContentHeader
        title={typeNavigate.title}
        lineColor={typeNavigate.lineColor}
      >
        <SelectInput
          options={years}
          onChange={(e) => {
            setYearSelected(String(e.target.value));
            console.log(e.target.value);
          }}
          value={yearSelected}
        />
        <SelectInput
          options={Months}
          onChange={(e) => {
            setMounthSelected(String(e.target.value));
            console.log(String(e.target.value));
          }}
          value={monthSelected}
        />
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
        {Data.map((item, index) => (
          <HistoryFinanceCard
            title={item.description}
            subTitle={format(new Date(item.date), "dd/MM/yyyy")}
            amount={formatCurrency(Number(item.amount))}
            key={Math.random()}
            tagColor={item.frequency === "recorrente" ? "#4e41f0" : "#e44c4e"}
          />
        ))}
      </S.Content>
    </S.Container>
  );
}
