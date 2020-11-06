import React, { useState, useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import './App.css';
import {FACTS} from './FACTS';
import Typed from 'typed.js'
import TypingContainer from './components/Typing';


function App() {
  const [currentFact, setFact] = useState('boo');
  function getRandomFact() {
    const randomElement = FACTS[Math.floor(Math.random() * FACTS.length)];
    if (currentFact === randomElement) {
      return getRandomFact()
    }
    setFact(randomElement)
  }  
  
  const showCurrentFact = () => {
    return <TypingContainer string={currentFact} />
  }
  return (
    <div className="App">
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString('Hello, World! <br/> I am Felix - I like computers, art and hip hop')
            .start();
        }}
      />

      <button onClick={() => getRandomFact()}> Learn a Random Fact About me -> </button>
      <TypingContainer string={currentFact} />
  
    </div>
  );
}

export default App;
