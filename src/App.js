import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import './App.css';
import {FACTS} from './FACTS';




function App() {
  function getRandomFact() {
    const randomElement = FACTS[Math.floor(Math.random() * FACTS.length)];
    if (currentFact === randomElement) {
      return getRandomFact()
    }
    return randomElement
  }  
  function showRandomFact(fact) {
    console.log('calling', fact)
    return <Typewriter
      onInit={(randomFactTypewriter) => {
        randomFactTypewriter.typeString(fact)
          .start()
      }}
    /> 
  }
  const [currentFact, setFact] = useState('boo');
  useEffect(() => {
    showRandomFact(currentFact)
  }, [currentFact])
  return (
    <div className="App">
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString('Hello, World! <br/> I am Felix - I like computers, art and hip hop')
            .start();
        }}
      />

      <button onClick={() => {setFact(getRandomFact())}}> Learn a Random Fact About me -> </button>
      <div>{showRandomFact(currentFact)}</div>

    </div>
  );
}

export default App;
