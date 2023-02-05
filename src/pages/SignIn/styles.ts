import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  > h2 {
    margin-left: 10px;
    color: ${(props) => props.theme.colors.white};
  }
  > img {
    width: 45px;
  }
`;

export const Form = styled.form`
  width: 300px;
  height: 300px;
  border-radius: 20px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.tertiary};
`;

export const FormTitle = styled.h1`
  margin-bottom: 20px;
  color: ${(props) => props.theme.colors.white};
  &:after {
    content: "";
    display: block;
    width: 55px;
    border-bottom: 10px solid ${(props) => props.theme.colors.warning};
  }
`;
