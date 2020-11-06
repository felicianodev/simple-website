import React, { useState, useEffect, useRef, useCallback } from 'react';
import Typed from 'typed.js'

const TypingContainer = (string) => {
    const [currentFact, setFact] = useState('boo');
    const [resetTypewriter, setTypewriter] = useState(false);
    var typeRef = useRef(null)
    console.log('in comp', string)
    var options = {
      strings: []
    }
    options.strings.push(currentFact)
  
    useEffect(() => {
      setFact(string.string)
      if(!typeRef.current) {
        var typed = new Typed(typeRef, options)
      }
      typed.start()
      return () => {
        typed.destroy()
      };
    })

    return (
      <div className="Typing">
        <span ref={(el) => {typeRef = el} } key={currentFact}></span>
      </div>
    );
  }
  
  export default TypingContainer;
  