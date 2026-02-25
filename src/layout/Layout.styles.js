import styled from "styled-components";

const HEADER_HEIGHT = 120

export const Main = styled.main`
  // min-height: calc(100vh - ${HEADER_HEIGHT}px);
  min-height: 100vh;
  padding-top: ${HEADER_HEIGHT}px;
  background: linear-gradient(270deg, #FBFFAA 0%, #C2FEF6 100%);
`