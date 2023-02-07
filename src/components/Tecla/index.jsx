import "./styles.js"
import { Container } from "./styles"

export function Tecla({value}) {
  return (
    <Container>
      <button>{value}</button>     
    </Container>
  )
}