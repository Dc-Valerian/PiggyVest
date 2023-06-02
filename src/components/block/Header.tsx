import React from 'react'
import {IoIosArrowDown} from "react-icons/io"
import {BsCart3} from "react-icons/bs"
import {FaSearchengin} from "react-icons/fa"
import styled from 'styled-components'
import Button from '../static/Button'

const Header = () => {
  const [show,setShow] = React.useState<boolean>(false)

  const ChangeColorHeader = () =>{
    if (window.scrollY >= 70) {
      setShow(true)
    }else{
      setShow(false)
    }
  }

  window.addEventListener("scroll",ChangeColorHeader)
  return (
    <div>
     {show ? (
       <Container bcc='white'>
       <Wrapper>
         <Logo>Valerian</Logo>

         <NavHolder>
           <Nav>Home
             <Icon>
               <IoIosArrowDown/>
             </Icon>
           </Nav>
           <Nav>Pages
           <Icon>
           <IoIosArrowDown/>
               </Icon>
           </Nav>
           <Nav>Courses
           <Icon>
           <IoIosArrowDown/>
               </Icon>
           </Nav>
           <Nav>Features
           <Icon>
           <IoIosArrowDown/>
               </Icon>
           </Nav>
           <Nav>Blog
           <Icon>
           <IoIosArrowDown/>
               </Icon>
           </Nav>
         </NavHolder>

         <ButtonHold>
           <Search>
             <FaSearchengin/>
           </Search>
           <Cart>
             <BsCart3/>
           </Cart>
        <Butt>
         <Button title='Register' width='100px'/>
        </Butt>
        </ButtonHold>
       </Wrapper>
   </Container>
     ):(
       <Container bcc='#FEF0EF'>
       <Wrapper>
         <Logo>Valerian</Logo>

         <NavHolder>
           <Nav>Home
             <Icon>
               <IoIosArrowDown/>
             </Icon>
           </Nav>
           <Nav>Pages
           <Icon>
           <IoIosArrowDown/>
               </Icon>
           </Nav>
           <Nav>Courses
           <Icon>
           <IoIosArrowDown/>
               </Icon>
           </Nav>
           <Nav>Features
           <Icon>
           <IoIosArrowDown/>
               </Icon>
           </Nav>
           <Nav>Blog
           <Icon>
           <IoIosArrowDown/>
               </Icon>
           </Nav>
         </NavHolder>

         <ButtonHold>
           <Search>
             <FaSearchengin/>
           </Search>
           <Cart>
             <BsCart3/>
           </Cart>
        <Butt>
         <Button title='Register' width='100px'/>
        </Butt>
        </ButtonHold>
       </Wrapper>
   </Container>
     )}
    </div>
  )
}

export default Header




const Butt = styled.div`
margin: 9px;
`

const Cart = styled.div`
margin: 9px;
font-size: 20px;
cursor: pointer;
`

const Search = styled.div`
margin: 9px;
font-size: 20px;
cursor: pointer;
`

const ButtonHold = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

const Icon = styled.div`
margin-top: 8px;
`

const Nav = styled.nav`
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
cursor: pointer;
`

const NavHolder = styled.div`
display: flex;

`

const Logo = styled.div`
font-size: 30px;
color: black;
font-weight: 500;
cursor: pointer;
`

const Wrapper = styled.div`
height: 100%;
width:90%;
/* background-color: yellow; */
display: flex;
justify-content: space-between;
align-items: center;
`

const Container = styled.div<{bcc:string}>`
height: 70px;
width: 100%;
background-color: ${({bcc})=>bcc};
display: flex;
justify-content: center;
align-items: center;
position: fixed;
z-index: 99999;
`