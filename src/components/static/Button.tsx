import React from 'react'
import styled from 'styled-components'
// import { iButton } from '../../utils/interfaces'

interface iButton {
  width:string;
  title:string;
}

const Button:React.FC<iButton> = ({title,width}) => {
  return (
    <div>
      <Container width={`${width}`}>
        {title}
      </Container>
    </div>
  )
}

export default Button

const Container= styled.div<{width:string}>`
height: 40px;
width: ${({width})=>width};
border-radius: 5px;
text-align: center;
background-color: #F56962;
display: flex;
align-items: center;
justify-content: center;
color: white;
cursor: pointer;
font-size: 20px;
`