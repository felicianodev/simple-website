import React, { useState, useEffect, useRef, useCallback } from 'react';
import Typed from 'typed.js'

const Customtypewriter = (props) => {
    var typeWriterRef = useRef(null)
    useEffect(() => {
      var options = {
        strings: [],
        typeSpeed: 40,
        onComplete: (self) => {
          if(props.setDoneWriting) {
            console.log('DONE TYPING', self);
            props.setDoneWriting();
          }
        }
      }
      options.strings.push(props.string)      
      var typed = new Typed(typeWriterRef, options)
      typed.start()
      return () => {
        typed.destroy()
      };
    }, [props.string])

    return (
      <div className="Customtypewriter" className={props.doneWriting ? 'hide-cursor' : null}>
        <span ref={(el) => {typeWriterRef = el}}></span>
      </div>
    );
  }
  
  export default Customtypewriter;
  