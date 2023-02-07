import styled from 'styled-components'

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
border: .5px solid red; 
background: ${({theme}) => theme.COLORS.BACKGROUND_900};
width: 64px;
height: 64px;
border-radius: 50%;

button{
  background: transparent;
  border: none;
  color: #fff;
  font-size: 24px;
}
`