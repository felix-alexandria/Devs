import React from "react";
import {useState} from "react";
import styled from "styled-components"
import pic from "../Asset/hero-banner.png"
import {AiOutlineArrowUp} from "react-icons/ai"

const Hero = () => {

    const [scrollTop, setScrollTop]= useState(false)

    const ScrollToTop = () => {
        if (scrollTop && window.pageYOffset > 100){
            setScrollTop(true)
        }else if (
            scrollTop && window.pageYOffset <= 70
        )setScrollTop(false)
        
    }
    const Scroll = () => {
        window.scrollTo({top: 0, behavior: "smooth"})
    }
    window.addEventListener("scroll", ScrollToTop)
    return (
        <div id = "home">
            <Heron>
                <Contain>
                   <Right>
                    <H4>We are Web Developers from Nigeria</H4>
                    <H1>We build and Deploy websites that Users Love</H1> 
                    <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, est adipisci! Facilis natus maiores, accusamus ut dolores sunt deserunt delectus unde, autem aperiam voluptatibus repellat dolorem.</P>
                    <Button>Learn More</Button> </Right> 

                    <Left>
                        <Img src= {pic} alt="" />
                    </Left>
                    <Arrow onClick={Scroll}>
                        <AiOutlineArrowUp/>
                    </Arrow>
                </Contain>
            </Heron>
        </div>
    )
}

export default Hero;

const Arrow = styled.div`
width: 50px;
height: 50px;
background-color:#EF1F76;
color: white;
position: fixed;
bottom: 20px;
right: 20px;
box-shadow: rgb (100, 100, 111, 0.2) 0px 7px 29px opx;
border-radius: 5px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
font-size: 23px;
`
const Heron = styled.div`
width: 100vw;
height: 100vh;
background-color:#33246c;
display: flex;
justify-content: center;
align-items: center;
`
const Contain = styled.div`
width: 95vw;
height: 95vh;
// background-color: white;
display: flex;
justify-content: space-around;
align-items: center;`

const Right = styled.div`
padding-top: 10px;
width: 45%;
height: 75vh;
// background-color: red;
`

const H4 = styled.div`
margin-top: 25px;
color: #FFA90A;
font-size: 20px;
font-weight: 500`

const H1 = styled.div`
font-size: 55px;
font-weight: 700;
margin-top: 15px;
margin-bottom: 30px;
color:#ffffff;`

const P = styled.p`
color: #ffffff;
font-size: 18px;
line-height: 25px;
margin-bottom: 20px;`

const Button = styled.div`
margin-top: 35px;
width: 180px;
height: 50px;
display: flex;
align-items: center;
justify-content: center;
color: white;
font-weight: 500;
background-color:#F01B6F;
border-bottom-left-radius: 30px;
border-top-right-radius: 30px;

&:hover {
    background-color:#F55166;
}`

const Img = styled.img`
width: 550px;
height: 500px;
animation: shake 1s linear 0s infinite alternate;
animation-duration: 1s;
animation-delay: 0s;

@keyframes shake{
    0%{
        transform: translate(0px, 0px)rotate(0)
    }
    100%{
        transform: translate(2px, 2px) rotate (1deg)
    }
}
`
const Left = styled.div`
width: 45%;
height: 95vh;
display: flex;
align-items: center;
justify-content: center;
`