import "./styles.js"
import { Container } from "./styles"
import { Visor } from "../Visor"
import { Teclado } from "../Teclado"

export function Body() {
  return (
    <Container>
      <Visor />
      <Teclado />
    </Container>
  )
}