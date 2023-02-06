import React from "react";

import * as S from "./styles";
import happy from "../../assets/happy.svg";

interface Props {
  title: string;
  description: string;
  footerText: string;
  icon: string;
}

const MessageBox = (props: Props) => {
  const { description, footerText, icon, title } = props;
  return (
    <S.Container>
      <header>
        <h1>
          {title}
          <img src={icon} alt={title} />
        </h1>
        <p>{description} </p>
      </header>
      <footer>
        <span>{footerText}</span>
      </footer>
    </S.Container>
  );
};

export default MessageBox;
