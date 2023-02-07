import styled from 'styled-components'

export const Container = styled.div`
padding: 0 20px;
display: flex;
gap: 6px;
border: 1px solid red; 
background: ${({theme}) => theme.COLORS.BACKGROUND_900};
width: 292px;
height: 368px;
margin-top: 26px;
flex-wrap: wrap;
`