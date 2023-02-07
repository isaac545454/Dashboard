import React from "react";
import { ResponsiveContainer, BarChart, Bar, Cell, Tooltip } from "recharts";
import { formatCurrency } from "../../utils/FormatCurrency";

import * as S from "./styles";

interface Iprops {
  title: string;
  data: {
    name: string;
    amount: number;
    percent: number;
    color: string;
  }[];
}

const BarChartBox: React.FC<Iprops> = (props) => {
  const { data, title } = props;
  return (
    <S.Container>
      <S.SideLeft>
        <h2>{title}</h2>
        <S.LegendContainer>
          {data.map((item) => (
            <S.Legend color={item.color} key={item.name}>
              <div>{item.percent}%</div>
              <span>{item.name}</span>
            </S.Legend>
          ))}
        </S.LegendContainer>
      </S.SideLeft>
      <S.SideRight>
        <ResponsiveContainer>
          <BarChart data={data}>
            <Bar dataKey="amount">
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Bar>
            {/* <Tooltip
              formatter={(value: string) => formatCurrency(Number(value))}
            /> */}
          </BarChart>
        </ResponsiveContainer>
      </S.SideRight>
    </S.Container>
  );
};

export default BarChartBox;
