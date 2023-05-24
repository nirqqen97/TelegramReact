import React from "react";
import { useEffect } from "react";
import { useTelegram } from "../../hooks/useTelegram";
import "./Form.css";

export const Form = ( ) => {
    //29:21 usestate
    const {tg} = useTelegram()


    useEffect(() => {
      tg.MainButton.setParams({
          text: 'Send Data'
      })
    }, [tg]);

    // useEffect(() => {
    //    if (!street || !city) {
    //         tg.MainButton.hide()
    //    }
    //    else { 
    //     tg.MainButton.show()

    //    }
    //   }, [tg]);
    
    return (
        <div>
            <h3>Enter your data</h3>
            <input className="input" type="text" placeholder="City" />
            <input className="input" type="text" placeholder="Street" />
            <select>
                <option value={"legal"}>legal</option>
                <option value={"physical"}>physical</option>
            </select>
        </div>
    )
}