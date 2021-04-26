import React from 'react';
import data from '../data/socialLinks.js';
import styled from 'styled-components';

const date = new Date().getFullYear();

const FooterContainer = styled.footer`
  background-color: #0d1957;
  display: flex;
  justify-content: center;
`;

const MiniContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content: space-between;
  @media(max-width: 700px){
    flex-direction: column;
    justify-content: flex-end;
  }
`
const FooterLinks = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-evenly;
  @media(max-width: 1200px){
    width: 40%;
  };
  @media(max-width: 700px){
    width: 80%;
    padding-bottom: 1rem;
  };
`;

const Copyright = styled.h6`
  font-size: 1.6vh;
  text-align: left;
  color: #edede8;
  @media(max-width: 700px){
    font-size: 1.5vh;
  }
`;

const renderData = data.map(datalink => {
  return(
    <a
      key = {datalink.id}
      href = {datalink.href}
      rel = 'noreferrer'
      target = '_blank'
    >
       {datalink.icon}
    </a>
  )
});

const Footer = () => {

  return(
    <FooterContainer id = 'closer'>
      <MiniContainer>
        <Copyright>
          ©{date} Designed by Alex Lee
        </Copyright>
        <FooterLinks>
          {renderData}
        </FooterLinks>
      </MiniContainer>
    </FooterContainer>
  );
}

export default Footer;