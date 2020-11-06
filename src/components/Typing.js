import React, { useState, useEffect, useRef, useCallback } from 'react';
import Typed from 'typed.js'

const TypingContainer = (string) => {
    const [currentFact, setFact] = useState('boo');
    var typeRef = useRef(null)
    console.log('in comp', string)

  
    useEffect(() => {
      var options = {
        strings: []
      }
      options.strings.push(string.string)      
      //setFact(string.string)
      var typed = new Typed(typeRef, options)
      typed.start()
      return () => {
        typed.destroy()
      };
    }, [string.string])

    return (
      <div className="Typing">
        <span ref={(el) => {typeRef = el} }></span>
      </div>
    );
  }
  
  export default TypingContainer;
  