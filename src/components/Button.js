import React from 'react';
import './button.scss';

const Button = (props) => {
    console.log('button props', props)
    return (
        <div className="pixel-button-container">
        <button onClick={() => props.action()}>
            {props.string}
        </button>
        </div>

    );
  }
  
  export default Button;
  