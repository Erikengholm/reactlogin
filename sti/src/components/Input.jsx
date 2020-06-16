import React, { useState } from "react";
import "./styles/Input.css";
import {login} from './login'
import {create} from './cookie'

export const Input = (props) => {
    const [txt, setTxt] = useState("");
    const [isFocus, setIsFocus] = useState(false);
            if(login()){
return (

        <div className={"sti-input" + (isFocus ? " focus" : "")}>
               <input
                type={"text"}
                value={txt}
                onChange={(event) => {
                    setTxt(event.target.value);
                }}
                placeholder={"Namen"}
                onFocus={() => {
                  setIsFocus(true)
                }}
                onBlur={() => {
                  setIsFocus(false);
                }}
            />
             <input
                type={"text"}
                id={"key"}
                placeholder={"Key"}
                onFocus={() => {
                  setIsFocus(true)
                }}
                onBlur={() => {
                  setIsFocus(false);
                }}
            />
            <button
                onClick={(event) => {
                  create(txt,document.getElementById("key").value);
                }}>
                log in
            </button>
        </div>
    );}
    else{
      return (
        <div className={"sti-input" + (isFocus ? " focus" : "")}>
            <input
                type={"text"}
                value={txt}
                onChange={(event) => {
                    setTxt(event.target.value);
                }}
                placeholder={props.placeholder || ""}
                onFocus={() => {
                  setIsFocus(true)
                }}
                onBlur={() => {
                  setIsFocus(false);
                }}
            />
            <button
                onClick={(event) => {
                    event.preventDefault();
                    if (txt.length > 0) {
                        props.onAdd(txt);
                        setTxt("");
                    }
                }}>
                Add
            </button>
        </div>
    );
};}



