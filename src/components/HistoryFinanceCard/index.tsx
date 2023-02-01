import React from "react";

import * as S from "./styles";

export interface IProps {
  cardColor: string;
  tagColor: string;
  title: string;
  subTitle: string;
  amount: string;
}

const HistoryFinanceCard = (props: IProps) => {
  const { cardColor, tagColor, amount, subTitle, title } = props;

  return (
    <S.Container color={cardColor}>
      <S.Tag color={tagColor} />
      <div>
        <span>{title}</span>
        <small>{subTitle}</small>
      </div>
      <h3>{amount}</h3>
    </S.Container>
  );
};

export default HistoryFinanceCard;
