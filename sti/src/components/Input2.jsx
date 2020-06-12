import React, { useState } from "react";
import "./styles/Input.css";
export const input = (props) => {
    const [txt, setTxt] = useState("");
    const [isFocus, setIsFocus] = useState(false);

    return (
        <div className={"sti-input" + (isFocus ? " focus" : "")}>
            <input
                type={"text"}
                value={name}
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
             <input
                type={"text"}
                value={key}
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
                    console.log("hej");
                }}>
                Add
            </button>
        </div>
    );
};
