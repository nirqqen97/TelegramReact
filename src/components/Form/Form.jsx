import { useEffect, useState,React,useCallback } from "react";
import { useTelegram } from "../../hooks/useTelegram";
import "./Form.css";

export const Form = ( ) => {
    //29:21 usestate
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');

    const {tg} = useTelegram()

    const onSendData = useCallback(() => {
      const data = {
          city,
          street
      }
      tg.sendData(JSON.stringify(data))
    }, [city,street,tg]);
    

    useEffect(() => {
    tg.onEvent('mainButtonClicked', onSendData)
    return ( ) => {
        tg.offEvent('mainButtonClicked', onSendData)
    }

    
    }, [onSendData, tg]);
    

    useEffect(() => {
      tg.MainButton.setParams({
          text: 'Send Data'
      })
    }, [tg]);

    const handleChangeCity = (e) => {
        setCity(e.currentTarget.value)
    } 
    const handleChangeStreet = (e) => {
        setStreet(e.currentTarget.value)
    } 

    useEffect(() => {
       if (!street || !city) {
            tg.MainButton.hide()
       }
       else { 
        tg.MainButton.show()

       }
      }, [city, street, tg.MainButton]);
    
    return (
        <div>
            <h3>Enter your data</h3>
            <input value={city} className="input" type="text" placeholder="City" onChange={handleChangeCity} />
            <input value={street} className="input" type="text" placeholder="Street" onChange={handleChangeStreet} />
            <select>
                <option value={"legal"}>legal</option>
                <option value={"physical"}>physical</option>
            </select>
        </div>
    )
}