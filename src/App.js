export default function App() {
  async function getJoke() {
    const res = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await res.json();
    console.log(data.value);
  }

  return (
    <div>
      <h1>Chuckles With Chuck</h1>
      <button onClick={getJoke}>Get Joke</button>
    </div>
  );
}
