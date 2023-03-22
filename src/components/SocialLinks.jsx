import React from 'react';
import { FaEnvelope, FaGithubAlt, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import styled from 'styled-components';


const StyledLinks = styled.div`
  margin: 1rem 0;

  & ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style: none;
  }

  & li {
    margin-right: 15px;
  }

  & li:last-child {
    margin-right: 0;
  }
`
const Twitter = styled(FaTwitter)`
  font-size: 25px;
  font-weight: bold;
  color: #D9D9D9;
`

const GitHub = styled(FaGithubAlt)`
  font-size: 25px;
  font-weight: bold;
  color: #D9D9D9;
`

const LinkedIn = styled(FaLinkedinIn)`
  font-size: 25px;
  font-weight: bold;
  color: #D9D9D9;
`

const Email = styled(FaEnvelope)`
  font-size: 25px;
  font-weight: bold;
  color: #D9D9D9;
`

function SocialLinks() {
  return (
    <StyledLinks>
      <ul>
        <li>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <GitHub />
          </a>
        </li>
        <li>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <LinkedIn />
          </a>
        </li>
        <li>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <Twitter />
          </a>
        </li>
        <li>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <Email />
          </a>
        </li>
      </ul>
    </StyledLinks>
  )
}

export default SocialLinks