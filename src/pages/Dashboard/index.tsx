import React, { useState, useMemo } from "react";
import * as S from "./styles";
import ContentHeader from "../../components/contentHeader";
import SelectInput from "../../components/SelectInput";
import { years, MonthsTotal, ListOfMonths } from "../List/moch";
import WalletBox from "../../components/WalletBox";
import expenses from "../../repositories/expenses";
import gains from "../../repositories/gains";
import MessageBox from "../../components/MessageBox";
import PieChart from "../../components/PieChart";
import HistoryBox from "../../components/HistoryBox";

import happy from "../../assets/happy.svg";
import sad from "../../assets/sad.svg";

export default function Dashbord() {
  const [monthSelected, setMounthSelected] = useState<string>("1");
  const [yearSelected, setYearSelected] = useState<string>("2020");

  const totalExpenses = useMemo(() => {
    let total: number = 0;

    expenses.forEach((item) => {
      const date = new Date(item.date);
      const year = String(date.getFullYear());
      const month = String(date.getMonth() + 1);
      if (month === monthSelected && year === yearSelected) {
        try {
          total += Number(item.amount);
        } catch {
          throw new Error("Invalid amount");
        }
      }
    });
    return total as number;
  }, [monthSelected, yearSelected]);

  const totalGains = useMemo(() => {
    let total: number = 0;

    gains.forEach((item) => {
      const date = new Date(item.date);
      const year = String(date.getFullYear());
      const month = String(date.getMonth() + 1);
      if (month === monthSelected && year === yearSelected) {
        try {
          total += Number(item.amount);
        } catch {
          throw new Error("Invalid amount");
        }
      }
    });
    return total as number;
  }, [monthSelected, yearSelected]);

  const totalBalance = useMemo(() => {
    return totalGains - totalExpenses;
  }, [totalGains, totalExpenses]);

  const message = useMemo(() => {
    return totalBalance <= 0
      ? {
          title: "Que triste",
          description: "Neste mês, você gastou mais do que deveria",
          footerText:
            "verifique seus gastos e tente cortar algumas coisas desnecessarias ",
          icon: sad,
        }
      : {
          title: "Muito bem",
          description: "Sua carteira está positiva",
          footerText: "Continue assim, considere investir o seu saldo",
          icon: happy,
        };
  }, [totalBalance]);

  const relationsExpensesVersusGains = useMemo(() => {
    const total = totalGains + totalExpenses;
    const gainsPercent = (totalGains / total) * 100;
    const expensesPercent = (totalExpenses / total) * 100;

    return [
      {
        name: "Entradas",
        value: totalExpenses,
        percent: Number(gainsPercent.toFixed(1)),
        color: "#E44C4e",
      },
      {
        name: "Saidas",
        value: totalExpenses,
        percent: Number(expensesPercent.toFixed(1)),
        color: "#f7931b",
      },
    ];
  }, [totalGains, totalExpenses]);

  const historyData = useMemo(() => {
    return ListOfMonths.map((_, mounth) => {
      let amountEntry = 0;
      gains.forEach((gain) => {
        const data = new Date(gain.date);
        const gainMonth = data.getMonth();
        const gainYear = String(data.getFullYear());

        if (gainMonth === mounth && gainYear === yearSelected) {
          try {
            amountEntry += Number(gain.amount);
          } catch (error) {
            throw new Error("amountEntry is invalid");
          }
        }
      });
      let amountOutput = 0;
      expenses.forEach((expense) => {
        const data = new Date(expense.date);
        const expenseMonth = data.getMonth();
        const expenseYear = String(data.getFullYear());

        if (expenseMonth === mounth && expenseYear === yearSelected) {
          try {
            amountOutput += Number(expense.amount);
          } catch (error) {
            throw new Error("amountOutput is invalid");
          }
        }
      });

      return {
        monthNumber: mounth,
        mouth: ListOfMonths[mounth].substr(0, 3),
        amountEntry,
        amountOutput,
      };
    }).filter((item) => {
      const currentMonth = new Date().getMonth();
      const currentYear = new Date().getFullYear();
      return (
        (yearSelected === String(currentYear) &&
          item.monthNumber <= currentMonth) ||
        yearSelected < String(currentYear)
      );
    });
  }, [yearSelected]);

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
          amount={totalBalance}
          footerLabel="atualizado com base nas entradas e saida"
          icon="dolar"
          color="#4341f0"
        />
        <WalletBox
          title="entradas"
          amount={totalGains}
          footerLabel="atualizado com base nas entradas e saida"
          icon="up"
          color="#F7931B"
        />
        <WalletBox
          title="Saidas"
          amount={totalExpenses}
          footerLabel="atualizado com base nas entradas e saida"
          icon="down"
          color="#E44C4E"
        />
        <MessageBox
          title={message.title}
          description={message.description}
          footerText={message.footerText}
          icon={message.icon}
        />
        <PieChart data={relationsExpensesVersusGains} />
        <HistoryBox
          data={historyData}
          lineColorAmounrEntry="#f7931b"
          lineColorAmountOutput="#e44c4e"
        />
      </S.Content>
    </S.Container>
  );
}
