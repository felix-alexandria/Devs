import React from "react";
import styled from "styled-components"; 
import {BsGlobe} from "react-icons/bs";
import { FaDesktop } from "react-icons/fa";
import { VscTelescope } from "react-icons/vsc";
import { FaAngleRight } from "react-icons/fa";
// import pic2 from "../Asset/download.png"

const Services = () => {
    return (
        <div id  = "services">
            <Conta>
                <H1>Our Specialization</H1>
                <hr style={{height: "5px", width: "200px", backgroundColor: "#F76263",
                        borderRadius: "10px",
                        border: "none", }} />
                <Bex>
                    <Bex1>
                    <Image>
                        <VscTelescope style = {{ width: "50px",height: "50px", marginTop: "30px", marginBottom: "30px"}}/>
                        </Image>            
                        <H3>Strategy & Research</H3>
                        <Pr>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse consectetur voluptatem, molestias consequuntur excepturi architecto facilis reiciendis veniam animi minus perferendis praesentium laborum placeat sed?</Pr>
                        <Circle>
                            <FaAngleRight/>
                        </Circle>
                    </Bex1>
                    <Bex1>
                    <Image>
                        <FaDesktop style = {{ width: "50px",height: "50px", marginTop: "30px", marginBottom: "30px"}}/>
                        </Image>     
                        <H3>Web Development</H3>
                        <Pr>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse consectetur voluptatem, molestias consequuntur excepturi architecto facilis reiciendis veniam animi minus perferendis praesentium laborum placeat sed?</Pr>
                        <Circle>
                            <FaAngleRight/>
                        </Circle>
                    </Bex1>
                    <Bex1>
                        <Image>
                        
                                <BsGlobe style = {{ width: "50px",height: "50px", marginTop: "30px", marginBottom: "30px"}}/>
                            
                        </Image>                 
                        <H3>Web Solution</H3>
                        <Pr>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse consectetur voluptatem, molestias consequuntur excepturi architecto facilis reiciendis veniam animi minus perferendis praesentium laborum placeat sed?</Pr>
                        <Circle>
                            <FaAngleRight/>
                        </Circle>
                    </Bex1>
                </Bex>
            </Conta>
        </div>
    )
}

export default Services;

const Circle = styled.div`
width: 50px;
height: 50px;
margin-bottom: 50px;
border-radius: 30px;
display: flex;
align-items: center;
justify-content: center;
color: #F13F89;
border: 1px solid #F13F89;

&:hover{
    background-color: #F13F89;
    color:  #ffffff;
}
`

const Pr = styled.div`
font-size: 18px;
font-weight: 200;
margin-bottom: 50px;
text-align: center;
color:#5164AE;
`
const H3 = styled.div`
font-size: 30px;
font-weight: 600;
margin-bottom: 30px;
color: #171F5E;
`
const Image = styled.div`
width: 150px;
height: 100px;
color:  #F13F89;
background-color: #ffffff;
border-radius: 50px;
display: flex;
align-items: center;
justify-content: center;

&:hover {
    background-color: #F13F89;
    color:  #ffffff;
}
`
const Bex1 = styled.div`
width: 370px;
height: 470px;
margin-top: 30px;
background-color: #ffffff;
border-radius: 5px;
box-shadow: 3px 3px 3px 3px gray;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

const Bex = styled.div`
width: 95vw;
height: 600px;
display: flex;
justify-content: space-between;
align-items: center;
` 
const H1 = styled.div`
color: #171F5E;
font-size: 40px;
font-weight: 600;
margin-top: 60px;
margin-bottom: 10px;
`
const Conta = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
flex-direction: column;
`