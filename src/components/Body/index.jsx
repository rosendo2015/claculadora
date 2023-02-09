import "./styles.js"
import { Container } from "./styles"
import { Display } from "../Display"
import { Teclado } from "../Teclado"

export function Body() {
  return (
    <Container>
      <Display />
      <Teclado />
    </Container>
  )
}