import "./styles.js"
import { Container } from "./styles"
import { Tecla } from "../Tecla/index.jsx"
import { TeclaQua } from "../TeclaQua/index.jsx"
import { TeclaSec } from "../TeclaSec/index.jsx"
import { TeclaTer } from "../TeclaTer/index.jsx"
import { TbEqual, TbPlus, TbMinus, TbX, TbDivide, TbPercentage } from "react-icons/tb"
import imgPlusMinus from '../../assets/plusminus.png'
export function Teclado() {
  return (
    <Container>   
        <TeclaSec value={"CE"}></TeclaSec>
        <Tecla value={"C"}></Tecla>
        <Tecla icon={TbPercentage}></Tecla>
        <TeclaTer icon={TbDivide}></TeclaTer>

        <Tecla value={7}></Tecla>
        <Tecla value={8}></Tecla>
        <Tecla value={9}></Tecla>
        <TeclaTer icon={TbX}></TeclaTer>

        <Tecla value={4}></Tecla>
        <Tecla value={5}></Tecla>
        <Tecla value={6}></Tecla>
        <TeclaTer icon={TbMinus}></TeclaTer>

        <Tecla value={1}></Tecla>
        <Tecla value={2}></Tecla>
        <Tecla value={3}></Tecla>
        <TeclaTer icon={TbPlus} />

        <Tecla value={'+/-'}></Tecla>
        <Tecla value={'0'}></Tecla>
        <Tecla value={','}></Tecla>
        <TeclaQua icon={TbEqual}/>
        
    </Container>
  )
}