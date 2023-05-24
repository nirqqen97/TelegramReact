import { useEffect } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { useTelegram } from './hooks/useTelegram';



  function App() {
    const {tg} = useTelegram()


    const handeClick = ( ) => {
      tg.mainButton.show()
    }
    useEffect(() => {
      tg.ready()
    }, [tg]);
    

  return (
    <div className="App">
      <Header/>
      <button type='button' onClick={handeClick}> Toggle</button>
      Work
    </div>
  );
}

export default App;
