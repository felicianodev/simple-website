import React, { useState, useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import './App.css';
import {FACTS} from './FACTS';
import Customtypewriter from './components/Customtypewriter';
import Button from './components/Button';
import Header from './components/Header';

function App() {
  const [currentFact, setFact] = useState('boo');
  function getRandomFact() {
    const randomElement = FACTS[Math.floor(Math.random() * FACTS.length)];
    if (currentFact === randomElement) {
      return getRandomFact()
    }
    setFact(randomElement)
  }  
  
  return (
    <div className="App">
      <Header />
      <div className="content">
      <Customtypewriter string="Hello, World! <br/> I am Felix - I like computers, art and hip hop" />
      <Button action={getRandomFact} string="learn a random fact about me" />
      <Customtypewriter string={currentFact} />
      <a href="mailto:me@weberfelix.com">
        <Button action={()=>{}}string="shoot me an email" />
      </a>
      </div>

    </div>
  );
}

export default App;
