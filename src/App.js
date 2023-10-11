import { useState } from 'react';

export default function App() {
  const [joke, setJoke] = useState('');

  async function getJoke() {
    const res = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await res.json();
    setJoke(data.value);
  }

  return (
    <div>
      <h1 className='app-title'>Chuckles With Chuck</h1>{' '}
      <div className='app-container'>
        <h3 className='joke-text'>{joke}</h3>
        <button className='get-joke-button' onClick={getJoke}>
          Get Joke
        </button>
      </div>
    </div>
  );
}
