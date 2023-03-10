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
import { MonthsTotal, years } from "./moch";

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
  const [selectedFreguency, setSelectedFreguency] = useState<Array<string>>([
    "recorrente",
    "eventual",
  ]);
  const [Data, setDate] = useState<IDate[]>([]);

  const handleFreguencyClick = (type: string) => {
    const alreadySelected = selectedFreguency.findIndex(
      (item) => item === type
    );

    if (alreadySelected !== -1) {
      setSelectedFreguency(() => {
        const filterArray = selectedFreguency.filter((item) => item !== type);
        return filterArray;
      });
    } else {
      setSelectedFreguency((old) => {
        const newArray = [...old, type];
        return newArray;
      });
    }
  };

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

  useEffect(() => {
    setDate(typeNavigate.options);
    if (Data) {
      const filterDate = typeNavigate.options.filter((item) => {
        const date = new Date(item.date);
        const mount = String(date.getMonth() + 1);
        const year = String(date.getFullYear());
        const SelectedMounth = String(monthSelected);
        const SelectedYear = String(yearSelected);
        return (
          mount === SelectedMounth &&
          year === SelectedYear &&
          selectedFreguency.includes(item.frequency)
        );
      });
      const formatedDate: IDate[] = filterDate.map((item) => {
        return {
          description: item.description,
          amount: item.amount,
          frequency: item.frequency,
          date: item.date,
          tagColor: item.frequency === "recorrente" ? "#4e41f0" : "#e44c4e",
        };
      });

      setDate(formatedDate);
    }
  }, [monthSelected, yearSelected, typeNavigate.options, selectedFreguency]);

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
      <S.Filter>
        <button
          type="button"
          className={`tag-filter tag-filter-recurrent ${
            selectedFreguency.includes("recorrente") && "tag-actived"
          }`}
          onClick={() => handleFreguencyClick("recorrente")}
        >
          Recorrentes
        </button>
        <button
          type="button"
          className={`tag-filter tag-filter-eventual ${
            selectedFreguency.includes("eventual") && "tag-actived"
          }`}
          onClick={() => handleFreguencyClick("eventual")}
        >
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
