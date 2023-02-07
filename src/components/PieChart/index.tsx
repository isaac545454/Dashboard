import React from "react";
import * as S from "./styles";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface Props {
  data: {
    name: string;
    value: number;
    percent: number;
    color: string;
  }[];
}

const PieChartComponent = ({ data }: Props) => (
  <S.Container>
    <S.SideLeft>
      <h2>Relação</h2>
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
        <PieChart>
          <Pie data={data} dataKey="percent" isAnimationActive={true}>
            {data.map((item) => (
              <Cell key={item.name} fill={item.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </S.SideRight>
  </S.Container>
);

export default PieChartComponent;
