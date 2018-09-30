import React from 'react'
import styled from 'styled-components'
import './Footer.css'

const FooterElm = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5,auto);
  align-items: center;
  justify-items: center;
  @media (max-width: 640px){
      height: 80px;
  }
`
const social_links = [
  {
    title: 'Twitter',
    location: require('../assets/twitter.png'),
    url: 'https://twitter.com/AbhiKeesara1',
  },
  {
    title: 'Instagram',
    location: require('../assets/instagram.png'),
    url: 'https://www.instagram.com/abhireddykeesara',
  },
  {
    title: 'Github',
    location: require('../assets/github.png'),
    url: 'https://github.com/AbhiRKeesara',
  },
  {
    title: 'Linkedin',
    location: require('../assets/linkedin.png'),
    url: 'https://www.linkedin.com/in/abhinay-reddy-k-69782293/',
  },
  {
    title: 'Mail',
    location: require('../assets/mail.png'),
    url: 'mailto:keesaraabhinay@gmail.com',
  }
]

const Footer = () => (
  <div className="footerSection">
  <FooterElm>
  {social_links.map((link, id) => (
      <a href={link.url} target="_blank" key={id}>
      <animateImages>
        <img className="footerImagesAnimation"
          src= {link.location}
          alt={link.title}
          width="60px"
        />
        </animateImages>
      </a>
    ))}
    </FooterElm>
    </div>
)
export default Footer