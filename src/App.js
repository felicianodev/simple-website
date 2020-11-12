import React, { useState } from 'react';
import './App.css';
import Customtypewriter from './components/Customtypewriter';
import Button from './components/Button';
import Header from './components/Header';
import RandomFactContainer from './components/RandomfactContainer';

function App() {
  const [introWritten, setIntroWritten] = useState(false);
  return (
    <div className="App">
      <Header />
      <div className="content">
      <Customtypewriter string="Hello, World! <br/> I am Felix - I like computers, art and hip hop" doneWriting={introWritten} setDoneWriting={() => setIntroWritten(true)} />
      {introWritten ? <RandomFactContainer /> : null}
      <a href="mailto:me@weberfelix.com" className="email-link">
        <Button action={()=>{}}string="shoot me an email" />
      </a>
      </div>

    </div>
  );
}

export default App;
