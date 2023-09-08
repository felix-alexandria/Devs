import React, { useState } from "react";
import { styled } from "styled-components";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-scroll";

const Header = () => {
  const [header, setHeader] = useState(false);

  const headerChange = () => {
    const scroll = window.pageYOffset;

    if (scroll >= 500) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  window.addEventListener("scroll", headerChange);
  return (
    <div>
    {header? (
      <Container bg = "#fff" po = "fixed">
      <Wrapper>
        <Logo cl = "#212671">Resolution</Logo>
        <Wrap1>
        <Nav>
          <Nav1  cl="#212671" to="home" smooth={true}>Home</Nav1>
          <Nav1 cl="#212671" to="about" smooth={true}>About</Nav1>
          <Nav1 cl="#212671" to="services" smooth={true}>Services</Nav1>
          <Nav1 cl="#212671" to="features" smooth={true}>Features</Nav1>
          <Nav1 cl="#212671" to="blog" smooth={true}>Blog</Nav1>
          <Nav1 cl="#212671" to="contact" smooth={true}>Contact Us</Nav1>
        </Nav>
        <Button>
        <Icon>
              <FaAngleRight />
            </Icon>
            Get A Quote</Button>
        </Wrap1>
      </Wrapper>
    </Container>
    ) : (
      <Container bg="#4E257A" po="sticky">
      <Wrapper>
        <Logo cl="#fff">Resolution</Logo>
        <Wrap1>
        <Nav>
          <Nav1  cl="#fff" to="home"smooth={true}>Home</Nav1>
          <Nav1 cl="#fff" to="about"smooth={true}>About</Nav1>
          <Nav1 cl="#fff" to="services" smooth={true}>Services</Nav1>
          <Nav1  cl="#fff" to="features" smooth={true}>Features</Nav1>
          <Nav1  cl="#fff" to="blog" smooth={true}>Blog</Nav1>
          <Nav1 cl="#fff" to="contact" smooth={true}>Contact Us</Nav1>
        </Nav>
        <Button>
        <Icon>
              <FaAngleRight />
            </Icon>
            Get A Quote</Button>
        </Wrap1>
      </Wrapper>
    </Container>
    )}

  </div>
)
}

export default Header;

const Icon = styled.div``

const Container = styled.div<{bg: string; po: string}>`
background-color: ${({bg}) => bg};
height: 80px;
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
position: ${({po}) => po};
transition: all ease-in-out 350ms;
`
const Wrapper =  styled.div`
height: 50px;
width: 95vw;
display: flex;
justify-content: space-between;
align-items: center;`

const Wrap1= styled.div`
width: 700px;
display: flex;
align-items: center;
justify-content: space-between;
`
const Logo = styled.div <{cl: string}>`
font-size: 30px;
font-weight: 500;
color: ${({ cl }) => cl};`

const Nav1 = styled(Link)<{cl: string}>`
font-size: 16px;
font-weight: 500;
color: ${({ cl }) => cl};
cursor: pointer;
`

const Nav = styled.div`
width: 430px;
display: flex;
align-items: center;
justify-content: space-between;
margin-left: 15px;
`
const Button = styled.div`
width: 200px;
height: 50px;
background-color: #F34168;
color: white;
display: flex;
justify-content: center;
align-items: center;
font-weight: 500;
font-size: 18px;
border-bottom-left-radius: 30px;
border-top-right-radius: 30px;

&:hover {
  background-color:  #F65E63;
}`