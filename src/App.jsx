import './App.css';
import { StarInfo } from './StarInfo';
import bg from './assets/bg.png';
import bg1 from './assets/bg1.png';
import bg2 from './assets/bg2.png';
import bg3 from './assets/bg3.png';
import bg4 from './assets/bg4.png';
import bg5 from './assets/bg5.png';
import bg6 from './assets/bg6.png';

function App() {
  const backgrounds = [bg, bg1, bg2, bg3, bg4, bg5, bg6];
  const max = backgrounds.length;
  const randInt = Math.floor(Math.random() * max);
  const randBg = backgrounds[randInt];
  const appStyle = {
    backgroundImage: `url(${randBg})`,
  };
  return (
    <div className='App'>
      <main className='App-main' style={appStyle}>
        <h1>⭐ Welcome To Star Info ⭐</h1>
        <StarInfo />
      </main>
    </div>
  );
}

export default App;
