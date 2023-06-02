import React from 'react'
import styled from 'styled-components'
import girl from "../assets/girl-hero.webp"
import dot from "../assets/dots-pattern.svg"

const Hero = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <First>
            <Title>
            Learn more and make <br /> success the result of <br /> perfection.
             </Title>
            <Text>
            Pick from over 100,000 online video courses with new <br /> additions published every month
            </Text>
            <SearchArea>
          
            </SearchArea>
          </First>
          <Second>
            <Img src={girl}/>
            <Dot src={dot}/>
          </Second>
            {/* <Pic src={dot}/> */}

        </Wrapper>
      </Container>
    </div>
  )
}

export default Hero

const Pic = styled.img`
width: 20%;
top: 10%;
right:10%;
position: relative;
`

const Dot = styled.img`
width: 20%;
bottom: 10%;
left: 63%;
position: relative;
`

const Img = styled.img`
position: absolute;
width:29%;
padding-top: 30px;

`


const SearchArea = styled.div``

const Text = styled.div`
margin-top: 30px;
line-height: 26px;
font-size: 18px;
`

const Title = styled.div`
display: flex;
align-items: center;
/* justify-content: flex-end; */
font-size: 50px;
font-weight: 700;
line-height:50px;
`

const Second = styled.div`
display: flex;
/* background-color: purple; */
height: 100%;
width: 100%;
`

const First = styled.div`
display: flex;
/* align-items: center; */
justify-content: center;
flex-direction: column;
/* background-color: blue; */
height: 100%;
width: 100%;
`

const Wrapper = styled.div`
width: 90%;
/* background-color: yellow; */
height: 100%;
display: flex;
/* flex-direction: column; */
`

const Container = styled.div`
background-color: #FEF0EF;
height:600px;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`