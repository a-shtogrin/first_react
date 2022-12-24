import React from 'react';
import './App.css';
import { CounterComponent } from './CounterComponent';
import { Input } from './Input';
import assetsImage from './Assets/img.png'

function App() {
  const handler = () => {
    console.log('КНОПКА была нажата');
  };
  return (
    <div className="App">
      <CounterComponent title={'Orange'} count={9} />
      <CounterComponent title={'Apple'} count={4} />
      <CounterComponent title={'Lemon'}/>
        <button onClick= {handler}>PUSH ME</button>
        <Input />

        <img src={assetsImage} alt="img" />

        <img src={'/img.png'} alt="img" /> {/* этот способ лучше */}

        <div className='example'>HELLO WORLD</div>
    </div>
  );
}

export default App;
