import styled from 'styled-components'

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
border: 1px solid red; 
background: ${({theme}) => theme.COLORS.BACKGROUND_900};
width: 50px;
height: 50px;
margin-top: 26px;
border-radius: 50%;

button{
  background: transparent;
  border: none;
  color: #fff;
  font-size: 26px;
}
`