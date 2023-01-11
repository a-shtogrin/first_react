import React from 'react';
import './App.css';
import { CounterComponent } from './CounterComponent';
import { Input } from './Input';
import { Header } from './Header';
import { Content } from './Content';
import { Footer } from './Footer';

function App() {
  const handler = () => {
    console.log('КНОПКА была нажата');
  };
  return (
    <div className="App">
      <Header />
      <Content />
      <CounterComponent title={'Orange'} count={9} />
      <CounterComponent title={'Apple'} count={4} />
      <CounterComponent title={'Lemon'} />
      <button onClick={handler}>PUSH ME</button>
      <Input />
      <Footer />
    </div>
  );
}

export default App;
