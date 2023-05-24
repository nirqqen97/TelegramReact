import { useEffect } from 'react';
import './App.css';
import { Header } from './components/Header/Header';


const tg = window.Telegram.WebApp

function App() {
  useEffect(() => {
    tg.ready()
  }, []);
  

  return (
    <div className="App">
      <Header/>
      Work
    </div>
  );
}

export default App;
