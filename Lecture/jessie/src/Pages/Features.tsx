import React from "react";
import styled from "styled-components";
import pic3 from "../Asset/feautres-banner.png";
import {IoBulbOutline} from "react-icons/io5";
import {IoIosColorPalette} from "react-icons/io";
import {BsCodeSlash} from "react-icons/bs";
import {BsFillRocketTakeoffFill} from "react-icons/bs";

const Features = () => {
    return (
        <div id = "features">
            <Con>
            <H1 style={{color: "#171F5E",
                        fontSize: "40px",
                        fontWeight: "600",
                        marginTop: "60px",
                        marginBottom: "10px"}}>Our Features</H1>
                <Line style={{height: "5px", width: "200px", backgroundColor: "#F76263",
                        borderRadius: "10px",
                        border: "none"}}></Line>
                <Con1>
                <Lef>
                    <Up>
                        <Cir>
                            <IoBulbOutline style={{
                                height: "30px", width: "30px"
                            }}/>
                        </Cir>
                        <Text>
                            <H3 style= {{color: "#2F2069"}}>Idea & Analysis</H3>
                            <Pd style= {{color: "#876A94"}}>
                            Praesent tincidunt congue est ut hendrerit. Pellentesque et eros sit amet ipsum venenatis.
                            </Pd>
                        </Text>
                    </Up>
                    <Down>
                    <Cir>
                            <IoIosColorPalette style={{
                                height: "30px", width: "30px"
                            }}/>
                        </Cir>
                        <Text>
                            <H3 style= {{color: "#2F2069"}}>Designing</H3>
                            <Pd style= {{color: "#876A94"}}>
                            Praesent tincidunt congue est ut hendrerit. Pellentesque et eros sit amet ipsum venenatis.
                            </Pd>
                        </Text>
                    </Down>
                </Lef>
                <Mid>
                    <Img src={pic3} />
                </Mid>
                <Rig>
                <Up>
                <Cir>
                            <BsCodeSlash style={{
                                height: "30px", width: "30px"
                            }}/>
                        </Cir>
                        <Text>
                            <H3 style= {{color: "#2F2069"}}>Development</H3>
                            <Pd style= {{color: "#876A94"}}>
                            Praesent tincidunt congue est ut hendrerit. Pellentesque et eros sit amet ipsum venenatis.
                            </Pd>
                        </Text>
                </Up>
                    <Down>
                    <Cir>
                            <BsFillRocketTakeoffFill style={{
                                height: "30px", width: "30px"
                            }}/>
                        </Cir>
                        <Text>
                            <H3 style= {{color: "#2F2069"}}>Testing and Launching</H3>
                            <Pd style= {{color: "#876A94"}}>
                            Praesent tincidunt congue est ut hendrerit. Pellentesque et eros sit amet ipsum venenatis.
                            </Pd>
                        </Text>
                    </Down>
                </Rig>
                </Con1>
            </Con>
        </div>
    )
}

export default Features;

const Line = styled.div``
const H1 = styled.div``

const H3 = styled.div`
font-weight: 500;
font-size: 25px;
`
const Pd = styled.div`
font-weight: 200;
font-size: 16px;
`
const Text = styled.div`
width: 300px;
height: 150px;
`
const Cir = styled.div`
width: 80px;
height: 80px;
border-radius: 50px;
background-color: #2F2069;
display: flex;
align-items: center;
justify-content: center;
color: white;
`
const Rig = styled.div`
width: 30%;
height: 45vh;

`
const Img = styled.img``

const Mid = styled.div`
width:30%;
height: 70vh;

display: flex;
align-items: center;
justify-content: center;
`
const Down = styled.div`
width: 400px;
height: 200px;
// margin-bottom: 30px;
display: flex;
justify-content: space-around;
`
const Up = styled.div`
width: 400px;
height: 200px;
// margin-top: 30px;
display: flex;
justify-content: space-around;
`
const Lef = styled.div`
width: 30%;
height: 45vh;
`
const Con1 = styled.div`
width: 100vw;
height: 80vh;
display: flex;
`

const Con = styled.div`
width: 100vw;
height: 90vh;
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: column;
`

