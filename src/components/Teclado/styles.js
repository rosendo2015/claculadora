import styled from 'styled-components'

export const Container = styled.div`
padding: 0 20px;
display: flex;
align-items: center;
justify-content: center;
gap: 12px;
border: 1px solid red; 
background: ${({theme}) => theme.COLORS.BACKGROUND_900};
width: 299px;
height: 368px;
margin-top: 26px;
flex-wrap: wrap;

`
