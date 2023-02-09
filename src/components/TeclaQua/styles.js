import styled from 'styled-components'

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
 
background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.15) 0%,
      rgba(255, 255, 255, 0.05) 100%
    ),
    #7f45e2;
  box-shadow: 0px 11px 7px rgba(0, 0, 0, 0.01), 0px 7px 7px rgba(0, 0, 0, 0.04),
    0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.26),
    0px 0px 2px rgba(0, 0, 0, 0.29), inset 0px 2px 3px rgba(255, 255, 255, 0.1);border-radius: 999px;
width: 64px;
height: 64px;

button{
  display: flex;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 24px;
}
`