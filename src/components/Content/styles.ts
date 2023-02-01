import styled from "styled-components";

export const Container = styled.div`
  grid-area: CT;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  padding: 10px 20px;
`;
