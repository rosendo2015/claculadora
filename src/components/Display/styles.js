import styled from 'styled-components'

export const Container = styled.div`
background: ${({theme}) => theme.COLORS.BACKGROUND_900};
width: 292px;
height: 86px;
input{
  width: 100%;
  background: transparent;
  border: none;
}
#calc{
  height: 28px;
}
#calc::placeholder{  
font-size: 20px;
line-height: 140%;
text-align: right;
letter-spacing: -0.02em;
color: #6B6B6B;
}
#result{ 
  font-size: 36px;
  line-height: 140%;
  text-align: right;
  letter-spacing: -0.02em;
  color: #EBEBEB;
  
}
>div{
  display: flex;
  align-items: center;  
}
`