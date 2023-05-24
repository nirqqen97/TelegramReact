import React from "react";
import "./Button.css";


export const Button = (props) => { 
    return (
        <button {...props} type="button" className={'button' + props.className}/>
    )
}