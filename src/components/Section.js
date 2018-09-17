import React from 'react'
import styled from 'styled-components'
import Wave from './Wave';

const SectionGroup = styled.div`
  background: url(${props => props.image});
  height: 720px;
  backgound-size: cover;
  display: grid;
  grid-template-rows: 300px auto;
  grid-gap: 20px;
  postion: relative;

  @media (max-width: 640px){
      height: 920px;
  }
`

const SectionLogo = styled.img`
    align-self: end;
    width: 128px;
    margin: 0 auto;
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
    border-radius: 50% ;
`

const SectionTitleGroup = styled.div`
    display: grid;
    grid-template-columns: 300px auto;
    margin: 0 40px;
    grid-gap: 20px;
    grid-template-rows: auto 100%;

    @media (max-width: 720px){
        grid-template-columns: 1fr;
    }

`

const SectionTitle = styled.h3`
    color: white;
    font-size: 60px;
    margin: 0;
    line-height: 1.2;

    @media (max-width: 720px){
        font-size: 40px;
    }
`

const SectionText = styled.p`
    color: white;

    @mediam(max-width: 600px) {
        font-size:20px;
    }
`

const WaveBottom = styled.div` 
    postion: absolute;
    width: 100%;
    bottom: -6px;

`
const WaveTop = styled.div `
    postion: absolute;
    width: 100%;
    top: -6px;
    transform: rotate(180deg);

`

const Section = props => (
    <SectionGroup image={props.image}>
        {/* <WaveTop><Wave /></WaveTop> */}
        <SectionLogo src = {props.logo}/>
            <SectionTitleGroup>
                <SectionTitle>{props.title}</SectionTitle>
                <SectionText>{props.text}</SectionText>
            </SectionTitleGroup>
        {/* <WaveBottom> <Wave /> </WaveBottom> */}
    </SectionGroup>
)
export default Section