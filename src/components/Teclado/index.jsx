import "./styles.js"
import { Container } from "./styles"
import { Tecla } from "../Tecla/index.jsx"

export function Teclado() {
  return (
    <Container>
      <Tecla value={1}></Tecla>
      <Tecla value={2}></Tecla>
      <Tecla value={3}></Tecla>
      <Tecla value={4}></Tecla>
      <Tecla value={5}></Tecla>
      <Tecla value={6}></Tecla>
      <Tecla value={7}></Tecla>
      <Tecla value={8}></Tecla>
      <Tecla value={9}></Tecla>
      <Tecla value={"-"}></Tecla>
      <Tecla value={"="}></Tecla>
      <Tecla value={'+'}></Tecla>
      <Tecla value={6}></Tecla>
      <Tecla value={6}></Tecla>
      <Tecla value={6}></Tecla>
      <Tecla value={6}></Tecla>
      
    </Container>
  )
}