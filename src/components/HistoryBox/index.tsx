import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { formatCurrency } from "../../utils/FormatCurrency";
import * as S from "./styles";

interface IProps {
  data: {
    mouth: string;
    amountEntry: number;
    amountOutput: number;
    monthNumber: number;
  }[];

  lineColorAmounrEntry: string;
  lineColorAmountOutput: string;
}

const HistoryBox: React.FC<IProps> = ({
  data,
  lineColorAmounrEntry,
  lineColorAmountOutput,
}) => (
  <S.Container>
    <S.Headers>
      <h2>Historico de saldo</h2>
      <S.LegendContainer>
        <S.Legend color={lineColorAmounrEntry}>
          <div></div>
          <span>Entradas</span>
        </S.Legend>
        <S.Legend color={lineColorAmountOutput}>
          <div></div>
          <span>Saidas</span>
        </S.Legend>
      </S.LegendContainer>
    </S.Headers>
    <S.CharttContainer>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
        >
          <CartesianGrid stroke="#cecece" strokeDasharray="3 3" />
          <XAxis dataKey="mouth" stroke="#cecece" />
          <Tooltip
            formatter={(value: string) => formatCurrency(Number(value))}
          />
          <Line
            type="monotone"
            strokeWidth={5}
            dot={{ r: 5 }}
            activeDot={{ r: 8 }}
            dataKey="amountEntry"
            name="Entradas"
            stroke={lineColorAmounrEntry}
          />
          <Line
            type="monotone"
            strokeWidth={5}
            dot={{ r: 5 }}
            activeDot={{ r: 8 }}
            dataKey="amountOutput"
            name="Saidas"
            stroke={lineColorAmountOutput}
          />
        </LineChart>
      </ResponsiveContainer>
    </S.CharttContainer>
  </S.Container>
);

export default HistoryBox;
