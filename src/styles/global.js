import { createGlobalStyle } from "styled-components";
import theme from "./theme";

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body *{
  font-family: 'Rubik', sans-serif;
}
body{
  background: linear-gradient(180deg, #807ECE 0%, #8E7ECE 100%);
  color: ${({theme}) => theme.COLORS.WHITE};
  -webkit-font-smoothing: antialiased;
}
`