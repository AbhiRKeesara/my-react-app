import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';
import Section from '../components/Section';
import Wave from '../components/Wave';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons'


const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
         <h1> Hello World! </h1> 
         <p> Welcome to my new portfolio site. </p> 
         <Link to = "/page-2/" > My old portfolio site </Link>
        <Wave />
      </div>
    </div>
    <Section
    image = {
      require('../assets/wallpaper3.jpg')
    }
    logo = {
      require('../assets/mypic.jpg')
    }
    title = "About Me"
    text = "A strong foundation in software engineering and programming principles across multiple platforms.Hands-on in writing clean, elegant, well-documented and maintainable code. Little experience in the field of mobile development for iOS(iPhone/iPad), Android, Front-end Web , Quality Assurance.
    When I 'm not working you can find me watching my favorite Tv shows on Netflix, answer questions related to iOS, Android,and Java on stackoverflow, practice coding on CodinGame, listen to talks from conferences on youtube, browsing twitter to learn a thing or two from the people I follow.
    " />
    <div className="Cards">
      <h2> Portfolio</h2>
      <div className="CardGroup">
        <Card 
        title = "Websites a programmer should visit"
        text = "Writing"
        image = {require('../assets/wallpaper.jpg')}
        />
        <Card 
        title = "ToDOLists"
        text = "Swift & iOS"
        image = {require('../assets/wallpaper2.jpg')}
        />
        <Card 
        title = "Forgger Arcade Game"
        text = "JavaScript HMTL CSS"
        image = {require('../assets/wallpaper3.jpg')}
        />
        <Card 
        title = "My Resume"
        text = "JavaScript HMTL CSS"
        image = {require('../assets/wallpaper4.jpg')}
        />
        <Card 
        title = "Automation Framework"
        text = "Java Selenium Cucumber"
        image = {require('../assets/wallpaper.jpg')}
        />
        < Card
        title = "Twitter Bot"
        text = "NodeJS Twitter API"
        image = {
          require('../assets/wallpaper3.jpg')
        }
        />
      </div>
    </div>
    <div className="love">
     <p> Made with <FontAwesomeIcon className="pulse" icon={faHeart}/> in React -Copyright (c) 2018 Abhinay Reddy Keesara</p>
    </div>
  </div>
)

export default IndexPage


// M0 87.1596 C316 87.1597 444 160 884 52.0001 C1324 - 55.9999 1320.29 34.966 1538 71.251 C1814 117.251 2156 189.252 2560 87.1597 V233 .161 L0 233.161 V87 .1596 Z;

// M0 53.6584 C158 11.0001 213 0 363 0 C513 0 855.555 115.001 1154 115.001 C1440 115.001 1626 - 38.0004 2560 53.6585 V199 .66 L0 199.66 V53 .6584 Z;

// M0 25.9086 C277 84.5821 433 65.736 720 25.9086 C934 .818 - 3.9019 1214.06 - 5.23669 1442 8.06597 C2079 45.2421 2208 63.5007 2560 25.9088 V171 .91 L0 171.91 V25 .9086 Z