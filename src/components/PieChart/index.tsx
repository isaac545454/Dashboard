import React from "react";
import * as S from "./styles";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface Props {}

const PieChartComponent = (props: Props) => (
  <S.Container>
    <S.SideLeft>
      <h2>Relação</h2>
      <S.LegendContainer>
        <S.Legend color="#f7931b">
          <div>95%</div>
          <span>Entradas</span>
        </S.Legend>
        <S.Legend color="#e44c4e">
          <div>5%</div>
          <span>Saidas</span>
        </S.Legend>
      </S.LegendContainer>
    </S.SideLeft>
    <S.SideRight>
      {/* <ResponsiveContainer>
        <PieChart>
          <Pie data={[]} labelLine={false} dataKey="percent" />
        </PieChart>
      </ResponsiveContainer> */}
    </S.SideRight>
  </S.Container>
);

export default PieChartComponent;
