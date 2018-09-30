import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';
import Section from '../components/Section';
import Wave from '../components/Wave';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import Footer from '../components/Footer';

const currentYear = new Date().getFullYear()
const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
         <h1> Hello World! </h1> 
         <p> Welcome to my portofolio site <img className="reactImage" src={require('../assets/logo-react.png')}/> </p> 
         <a href="https://abhinayreddykeesara.me">My another colorful portfolio site</a>
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
        <a href = "https://github.com/AbhiRKeesara/Best-websites-as-a-programmer-you-should-visit" >
        <Card 
        title = "Websites a programmer should visit"
        text = "Writing"
        image = {require('../assets/wallpaper.jpg')}
        links = "www.google.com"
        />
        </a>
        <a href = "https://github.com/AbhiRKeesara/ToDoLists" >
        <Card 
        title = "ToDOLists"
        text = "Swift & iOS"
        image = {require('../assets/wallpaper2.jpg')}
        />
        </a>
        <a href="https://github.com/AbhiRKeesara/ARCADE-GAME">
        <Card 
        title = "Arcade Game"
        text = "JavaScript HMTL CSS"
        image = {require('../assets/wallpaper3.jpg')}
        />
        </a>
        <a href="https://github.com/AbhiRKeesara/AbhiRKeesara.io">
        <Card 
        title = "My Resume"
        text = "JavaScript HMTL CSS"
        image = {require('../assets/wallpaper4.jpg')}
        />
        </a>
        <a href="https://github.com/AbhiRKeesara/AutoProject">
        <Card 
        title = "Automation Framework"
        text = "Java Selenium Cucumber"
        image = {require('../assets/wallpaper.jpg')}
        />
        </a>
        <a href="https://github.com/AbhiRKeesara/TweeterBots">
        <Card
        title = "Twitter Bot"
        text = "NodeJS Twitter API"
        image = {
          require('../assets/wallpaper3.jpg')
        }
        />
        </a>
      </div>
    </div>
    <Footer />
    <div className="love">
     <p> Made with <FontAwesomeIcon className="pulse" icon={faHeart}/> in React -&copy; Abhinay Reddy Keesara {currentYear}.</p>
    </div>
  </div>
)

export default IndexPage
