import React from 'react';
import './App.css';
import SlotMach from './SlotMach';

function App() {
  return (
    <div className="App">
      <h1 className="heading__style"> 🎰 Welcome To <span style={{ fontWeight: 'bolder' }}> Slot Machine Game</span> 🎰 </h1>
      <div className='slot_machine'>
        <SlotMach x='😄' y='😄' z='😄' />
        <SlotMach x='🍎' y='🍎' z='🍍' />
        <SlotMach x='🐅' y='🐅' z='🐅' />
        <SlotMach x='😄' y='😄' z='😄' />
        <SlotMach x='🥪' y='🍔' z='🍕' />
      </div>
    </div>
  );
}

export default App;
