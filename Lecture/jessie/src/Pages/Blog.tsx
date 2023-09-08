import React from "react";
import styled from "styled-components";
import piv from "../Asset/blog-1.jpg";
import piv1 from "../Asset/blog-2.jpg";
import piv2 from "../Asset/blog-3.jpg";
import piv3 from "../Asset/blog-4.jpg";
import {CiClock2} from "react-icons/ci";
import {BsChat} from "react-icons/bs";
import {BsShare} from "react-icons/bs";

const Blog=() => {
    return (
        <div id = "blog">
            <Containr>
            <H1 style={{color: "#171F5E",
                        fontSize: "40px",
                        fontWeight: "700",
                        marginTop: "60px",
                        }}>Our Blog & News</H1>
                <Line style={{height: "5px", width: "200px", backgroundColor: "#F76263",
                        borderRadius: "10px",
                        border: "none"}}></Line>
                <First>
                    <No1>
                        <Img src={piv} alt="" />
                    </No1>
                    <Tex>
                        <H4 style={{fontSize: "20px", fontWeight: "600", color: "#171F5E", textAlign: "left"}}>Vestibulum massa arcu, consectetu pellentesque scelerisque.</H4>
                        <Pf style={{fontSize: "16px", fontWeight: "200", color: "#5B558A", textAlign: "left"}}>Sed quis sagittis velit. Aliquam velit eros, bibendum ut massa et, consequat laoreet erat nam ac imperdiet.</Pf>
                        <Diva>
                            <Tim>
                                <Iconi>
                                <CiClock2 style ={{color: "#F8A8CA", width: "20px", height: "20px"}}/>
                                </Iconi>
                                <Pt style={{color: "#666A91", fontSize: "16px", textAlign: "left"}}>7 March, 2022</Pt>
                            </Tim>
                            <Mes>
                                <Iconi>
                                    <BsChat style ={{color: "#F8A8CA", width: "20px", height: "20px"}} />
                                </Iconi>
                                <Pt style={{color: "#666A91", fontSize: "16px", textAlign: "left"}}>15</Pt>
                            </Mes>
                            <Iconi>
                               <BsShare style ={{color: "#F8A8CA", width: "20px", height: "20px"}}/>
                            </Iconi>
                        </Diva>
                    </Tex>
                </First>
                <Second>
                    <No1>
                        <Img src={piv1} alt="" />
                    </No1>
                    <Tex>
                        <H4 style={{fontSize: "20px", fontWeight: "600", color: "#171F5E", textAlign: "left"}}>Vestibulum massa arcu, consectetu pellentesque scelerisque.</H4>
                        <Pf style={{fontSize: "16px", fontWeight: "200", color: "#5B558A", textAlign: "left"}}>Sed quis sagittis velit. Aliquam velit eros, bibendum ut massa et, consequat laoreet erat nam ac imperdiet.</Pf>
                        <Diva>
                            <Tim>
                                <Iconi>
                                <CiClock2 style ={{color: "#F8A8CA", width: "20px", height: "20px"}}/>
                                </Iconi>
                                <Pt style={{color: "#666A91", fontSize: "16px", textAlign: "left"}}>7 March, 2022</Pt>
                            </Tim>
                            <Mes>
                                <Iconi>
                                    <BsChat style ={{color: "#F8A8CA", width: "20px", height: "20px"}} />
                                </Iconi>
                                <Pt style={{color: "#666A91", fontSize: "16px", textAlign: "left"}}>15</Pt>
                            </Mes>
                            <Iconi>
                               <BsShare style ={{color: "#F8A8CA", width: "20px", height: "20px"}}/>
                            </Iconi>
                        </Diva>
                    </Tex>
                </Second>
                <Third>
                    <No1>
                        <Img src={piv2} alt="" />
                    </No1>
                    <Tex>
                        <H4 style={{fontSize: "20px", fontWeight: "600", color: "#171F5E", textAlign: "left"}}>Vestibulum massa arcu, consectetu pellentesque scelerisque.</H4>
                        <Pf style={{fontSize: "16px", fontWeight: "200", color: "#5B558A", textAlign: "left"}}>Sed quis sagittis velit. Aliquam velit eros, bibendum ut massa et, consequat laoreet erat nam ac imperdiet.</Pf>
                        <Diva>
                            <Tim>
                                <Iconi>
                                <CiClock2 style ={{color: "#F8A8CA", width: "20px", height: "20px"}}/>
                                </Iconi>
                                <Pt style={{color: "#666A91", fontSize: "16px", textAlign: "left"}}>7 March, 2022</Pt>
                            </Tim>
                            <Mes>
                                <Iconi>
                                    <BsChat style ={{color: "#F8A8CA", width: "20px", height: "20px"}} />
                                </Iconi>
                                <Pt style={{color: "#666A91", fontSize: "16px", textAlign: "left"}}>15</Pt>
                            </Mes>
                            <Iconi>
                               <BsShare style ={{color: "#F8A8CA", width: "20px", height: "20px"}}/>
                            </Iconi>
                        </Diva>
                    </Tex>
                </Third>
                <Fourth>
                    <No1>
                        <Img src={piv3} alt="" />
                    </No1>
                    <Tex>
                        <H4 style={{fontSize: "20px", fontWeight: "600", color: "#171F5E", textAlign: "left"}}>Vestibulum massa arcu, consectetu pellentesque scelerisque.</H4>
                        <Pf style={{fontSize: "16px", fontWeight: "200", color: "#5B558A", textAlign: "left"}}>Sed quis sagittis velit. Aliquam velit eros, bibendum ut massa et, consequat laoreet erat nam ac imperdiet.</Pf>
                        <Diva>
                            <Tim>
                                <Iconi>
                                <CiClock2 style ={{color: "#F8A8CA", width: "20px", height: "20px"}}/>
                                </Iconi>
                                <Pt style={{color: "#666A91", fontSize: "16px", textAlign: "left"}}>7 March, 2022</Pt>
                            </Tim>
                            <Mes>
                                <Iconi>
                                    <BsChat style ={{color: "#F8A8CA", width: "20px", height: "20px"}} />
                                </Iconi>
                                <Pt style={{color: "#666A91", fontSize: "16px", textAlign: "left"}}>15</Pt>
                            </Mes>
                            <Iconi>
                               <BsShare style ={{color: "#F8A8CA", width: "20px", height: "20px"}}/>
                            </Iconi>
                        </Diva>
                    </Tex>
                </Fourth>
            </Containr>

        </div>
    )
}

export default Blog;
const Line = styled.div``
const H1 = styled.div``


const Fourth = styled.div`
width: 1200px;
height: 400px;
display: flex;
justify-content: space-around;
align-items: center;
box-shadow: 2px 2px 2px 2px gray;
border-radius: 10px;
`
const Third = styled.div`
width: 1200px;
height: 400px;
display: flex;
justify-content: space-around;
align-items: center;
box-shadow: 2px 2px 2px 2px gray;
border-radius: 10px;
`
const Second = styled.div`
width: 1200px;
height: 400px;
display: flex;
justify-content: space-around;
align-items: center;
box-shadow: 2px 2px 2px 2px gray;
border-radius: 10px;
`
const Pt = styled.div``
const Mes = styled.div`
width: 60px;
height: 30px;
display: flex;
justify-content: space-between;
`
const Iconi = styled.div``

const Tim = styled.div`
width: 130px;
height: 30px;
display: flex;
justify-content: space-between;
`
const Diva = styled.div`
width: 320px;
height: 40px;
display: flex;
justify-content: space-around;
position: absolute;
bottom: 0;
left: 0;
align-items: center;
color: #F8A8CA;
`
const Pf = styled.div`
position: absolute;
top: 140px;
left: 0;
`

const H4 = styled.div`
position: absolute;
top: 0;
left: 0;
`

const Tex = styled.div`
width: 600px;
height: 350px;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
position: relative;
`
const Img = styled.img`
width: 550px;
height: 350px;
`
const No1 = styled.div`
width: 550px;
height: 350px;
`
const First = styled.div`
width: 1200px;
height: 400px;
display: flex;
justify-content: space-around;
align-items: center;
box-shadow: 2px 2px 2px 2px gray;
border-radius: 10px;
`
const Containr = styled.div`
width: 100%;
height: 270vh;
// background-color: green;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
`