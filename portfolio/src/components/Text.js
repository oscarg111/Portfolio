import React from "react";
import { useState, useEffect } from "react";

export const Text = () => {
    const [text, setText] = useState("");

    // execute action exactly when component mounts and is updated
    // array is for when you want to only call when update certain things
    useEffect(() => {

        return () => {
            // returned when component unmounts
        }
    }, [text])

    return (
        <div>
            <input 
                onChange={(event) => {
                    setText(event.target.value);
                }}
            />

            <h1> {text}</h1>
        </div>
    )
}
