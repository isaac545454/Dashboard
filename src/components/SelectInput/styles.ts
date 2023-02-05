import styled from "styled-components";

export const Container = styled.div`
  > select {
    padding: 7px 10px;
    border-radius: 5px;
    margin-left: 7px;
    background-color: ${(props) => props.theme.colors.tertiary};
    color: ${(props) => props.theme.colors.white};
  }
`;
