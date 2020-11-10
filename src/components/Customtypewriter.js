import React, { useState, useEffect, useRef, useCallback } from 'react';
import Typed from 'typed.js'

const Customtypewriter = (string) => {
    var typeRef = useRef(null)
    useEffect(() => {
      var options = {
        strings: []
      }
      options.strings.push(string.string)      
      var typed = new Typed(typeRef, options)
      typed.start()
      return () => {
        typed.destroy()
      };
    }, [string.string])

    return (
      <div className="Customtypewriter">
        <span ref={(el) => {typeRef = el} }></span>
      </div>
    );
  }
  
  export default Customtypewriter;
  