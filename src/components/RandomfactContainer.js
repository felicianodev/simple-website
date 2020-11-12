import React, {useState} from 'react';
import Button from './Button'
import Customtypewriter from './Customtypewriter'
import {FACTS} from '../FACTS';

const RandomFactContainer = (props) => {
    const [currentFact, setFact] = useState('');
    function getRandomFact() {
      const randomElement = FACTS[Math.floor(Math.random() * FACTS.length)];
      if (currentFact === randomElement) {
        return getRandomFact()
      }
      setFact(randomElement)
    }  
    return (
        <div>
              <Button action={getRandomFact} string="learn a random fact about me" />
              <Customtypewriter string={currentFact} />
        </div>
    );
  }
  
  export default RandomFactContainer;
  