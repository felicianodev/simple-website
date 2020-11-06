import React, { useState, useEffect, useRef, useCallback } from 'react';
import Typed from 'typed.js'

const TypingContainer = (string) => {
    const [currentFact, setFact] = useState('boo');
    const [resetTypewriter, setTypewriter] = useState(false);
    var typeRef = useRef(null)

    //const helper = useMemo(() => new Typed(typeRef, options), []);
    console.log('in comp', string)
    var options = {
      strings: [
         
      ]
    }      
  
    useEffect(() => {
      setFact(string.string)
      options.strings.push(currentFact)
      if(!typeRef.current) {
        console.log('oh yea')
        var typed = new Typed(typeRef, options)
      } else {
        console.log('in else')
        typeRef.current.value = "fsa"
      }
      //typed.onStringTyped(string.string)
      typed.start()
    })

  //const [ref, setRef] = useState(null);

/*   const onRefChange = useCallback(node => {
    // ref value changed to node
    setRef(node); // e.g. change ref state to trigger re-render
    if (node === null) { 
      // node is null, if DOM node of ref had been unmounted before
    } else {
      // ref value exists
      var options = {
          strings: [string]
      }
      var typed = new Typed(node, options)

    }
  }, []); */
  
/*   var options = {
    strings: [
        string.string
    ]
  }
  var typed = new Typed(typeRef, options) */

    return (
      <div className="Typing">
        <div ref={(el) => {typeRef = el} } key={currentFact}></div>
      </div>
    );
  }
  
  export default TypingContainer;
  