import React from 'react'
import styled from 'styled-components'
import logo from "../../../assets/logo.svg"

function Header() {
  return (
    <Container>
      <Wrapper>
        <Right>
          <img src={logo} alt="" />
          <div>Save</div>
          <div>Invest</div>
          <div>Stories</div>
          <div>FAQs</div>
          <div>Resources</div>
        </Right>
        <Left>
          <Button1>Sign in</Button1>
          <Button2>Create free account</Button2>

        </Left>
      </Wrapper>
    </Container>
  )
}

export default Header
const Button1 = styled.div`
width: 30%;
height: 70%;
/* background-color: blue; */
border-radius: 5%;
display: flex;
justify-content: space-between;
align-content: center;


`
const Button2 = styled.div`
`

const Left = styled.div`
width: 400px;
height: 80px;
/* background-color: purple; */
display: flex;
align-items: center;
justify-content: space-evenly;
`
const Right = styled.div`
width: 600px;
height: 80px;
/* background-color: gold; */
display: flex;
align-items: center;
justify-content: space-between;
`
const Wrapper = styled.div`
width: 85%;
height: 80px;
/* background-color:blue; */
display: flex;
align-items: center;
justify-content: space-between;
`
const Container = styled.div`
width: 100%;
height: 80px;
/* background-color:red; */
display: flex;
align-items: center;
justify-content: center;
`