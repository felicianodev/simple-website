import React from 'react';
import './header.scss';
import GithubLogo from '../icons/GitHub-Mark-Light-32px.png';
import LinkedinLogo from '../icons/linkedin-32.png'
const Header = (props) => {
    console.log('button props', props)
    return (
        
        <header className="header">
            <a href="/" className="header--logo">
                Felix Weber
            </a> 
            <div className="header--external-links">
                <a href="https://github.com/felicianodev" className="header--github-link">
                    <img src={GithubLogo} />
                </a>
                <a href="https://www.linkedin.com/in/felix-weber-49199b133" className="header--github-link">
                    <img src={LinkedinLogo} />
                </a>
            </div>
        </header>   

    );
  }
  
  export default Header;
  