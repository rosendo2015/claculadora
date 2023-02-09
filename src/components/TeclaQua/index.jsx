import "./styles.js"
import { Container } from "./styles"


export function TeclaQua({icon: Icon, ...rest}) {
  return (
    <Container>
      <button>
        {Icon && <Icon size={28}/>}
      </button>     
    </Container>
  )
}