import { useEffect } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { useTelegram } from './hooks/useTelegram';



  function App() {
    const {tg,onToggleButton} = useTelegram()


 
   const handleClick =( ) => { 
      // tg.mainButton.text('Button')
      // tg.mainButton.enable()
      // tg.mainButton.show();
      alert(tg.mainButton)
     alert('main button clicked')
   }
    useEffect(() => {
      tg.ready()
    }, [onToggleButton, tg]);
    

  return (
    <div className="App">
      <Header/>
      <button onClick={onToggleButton}> Show Btn</button>
      <button onClick={handleClick}> AlertTest</button>
      Work
    </div>
  );
}

export default App;
