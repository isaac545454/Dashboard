import React, { FormEvent, useContext, useState } from "react";
import logoImg from "../../assets/logo.svg";
import * as S from "./styles";
import Input from "../../components/Input";
import Button from "../../components/button";
import { useAuth } from "../../hooks/Auth";

export default function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { signIn } = useAuth();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    signIn(email, password);
  };

  return (
    <S.Container>
      <S.Logo>
        <img src={logoImg} alt="logo" />
        <h2>Minha Carteira </h2>
      </S.Logo>
      <S.Form onSubmit={handleSubmit}>
        <S.FormTitle>Entrar</S.FormTitle>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Acessar</Button>
      </S.Form>
    </S.Container>
  );
}
