import "./styles.js"
import { Container } from "./styles"
import { TbEqual } from "react-icons/tb"
export function Display() {
  return (
    <Container>
    <input id="calc" type="text" placeholder="1 + 1"/> 
    <div>
    <TbEqual />
    <input id="result" type="text" value={0}/> 
    </div>
    </Container>
  )
}