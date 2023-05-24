import { useEffect } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { useTelegram } from './hooks/useTelegram';



  function App() {
    const {tg,onToggleButton} = useTelegram()


 
  //  const handleClick =( ) => { 

  //     alert(tg.MainButton)
  //    alert('main button clicked')
  //  }
    useEffect(() => {
      tg.ready()
    }, [tg]);
    

  return (
    <div className="App">
      <Header/>
      <button onClick={onToggleButton}> Show Btn</button>
      Work
    </div>
  );
}

export default App;
