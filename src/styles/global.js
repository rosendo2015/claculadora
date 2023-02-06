import { createGlobalStyle } from "styled-components";
import theme from "./theme";

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  background: ${({theme}) => theme.COLORS.BACKGROUND_800};
  color: ${({theme}) => theme.COLORS.WHITE};
  -webkit-font-smoothing: antialiased;
}
`