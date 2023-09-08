import React from "react";
import styled from "styled-components"
import pic1 from "../Asset/about-banner.png"

const About = () => {
    return (
        <div id = "about">
            <Container>
                <Wrap>
                    <Right1>
                        <Img src= {pic1} alt="" />
                    </Right1>
                    <Left1>
                        <H1>Why Our Agency</H1>
                        <Line style={{height: "5px", width: "200px", backgroundColor: "#F76263",
                        borderRadius: "10px",
                        border: "none", }}></Line>
                        <P>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, provident beatae, repellat asperiores sequi error esse assumenda quibusdam cumque, alias non earum explicabo sit officiis dignissimos architecto accusantium natus dolore nobis blanditiis consequatur! Sunt, at! 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quaerat. Quos reiciendis officiis nulla beatae illo deleniti molestias distinctio eius?</P>
                        <BoxHold>
                            <Box>
                                9875
                                <Ps>Satisfied Clients</Ps>
                            </Box>
                            <Box>
                                7894
                                <Ps>Project Lunched</Ps>
                            </Box>
                            <Box>
                                75
                                <Ps>Years Completed</Ps>
                            </Box>
                        </BoxHold>
                    </Left1>
                </Wrap>
            </Container>
        </div>
    )
}

export default About;

const Line = styled.div``
const Ps = styled.div`
font-size: 16px;
font-weight: 100;
`

const Box = styled.div`
width: 150px;
height: 100px;
color: #1f2470;
border-radius: 10px;
border: none;
box-shadow: 2px 2px 2px gray;
font-weight: 700;
font-size: 30px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const BoxHold = styled.div`
width: 500px;
height: 200px;
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 25px;
`
const P = styled.div`
font-size: 18px;
color: #716A91;
line-height: 20px;
margin-top: 30px;
`
const H1 = styled.div`
font-size: 40px;
font-weight: 700;
color: #1F2470;
margin-top: 70px;
margin-bottom: 25px;
`
const Left1 = styled.div`
width: 40%;
height: 95vh;
`
const Img = styled.img`
width: 500px;
height: 500px;
`
const Right1 = styled.div`
width: 40%;
height: 95vw;
display: flex;
justify-content: center;
align-items: center;
`

const Wrap = styled.div`
width: 95vw;
height: 95vh;
display: flex;
align-items: center;
justify-content: space-around;
`

const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: space-around;
`

