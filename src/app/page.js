import React from 'react';
import './globals.css'
import MyButton from './Buttons'


export default function Home() {
  return (
    <div className='Home'>
      <img src='https://www.pngarts.com/files/5/Blue-Brain-Transparent.png' alt="Brain" className='Brain' />
      <Button text='Cerebrum' />
    </div>
  );
}