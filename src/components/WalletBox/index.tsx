import React from "react";
import * as S from "./styles";
import dolar from "../../assets/dollar.svg";
import down from "../../assets/arrow-down.svg";
import up from "../../assets/arrow-up.svg";
import CountUp from "react-countup";
interface Props {
  title: string;
  amount: number;
  footerLabel: string;
  icon: "dolar" | "up" | "down";
  color: string;
}

const WalletBox = (props: Props) => {
  const { amount, color, footerLabel, icon, title } = props;

  const Iconselected = {
    dolar,
    up,
    down,
  };

  return (
    <S.Container color={color}>
      <span>{title}</span>
      <S.Count>
        <CountUp
          end={amount}
          prefix={"R$ "}
          separator="."
          decimal=","
          decimals={2}
        />
      </S.Count>
      <small>{footerLabel}</small>
      <img src={Iconselected[icon]} alt={title} />
    </S.Container>
  );
};

export default WalletBox;
