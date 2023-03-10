import "./styles.js"
import { Container } from "./styles"

export function Tecla({icon : Icon, value, ...rest}) {
  return (
    <Container>
      <button>
        {Icon && <Icon size={28}/>}
        {value}
      </button>     
    </Container>
  )
}