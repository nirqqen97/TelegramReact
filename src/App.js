import { useEffect } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { useTelegram } from './hooks/useTelegram';


const sfs = window.Telegram.WebApp

  function App() {
    const {tg} = useTelegram()


    const handeClick = ( ) => {
      sfs.mainButton.show()
      
    }
    useEffect(() => {
      tg.ready()
    }, [tg]);
    

  return (
    <div className="App">
      <Header/>
      <button type='button' onClick={handeClick}> Show Btn</button>
      Work
    </div>
  );
}

export default App;
