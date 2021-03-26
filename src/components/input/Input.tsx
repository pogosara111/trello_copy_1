import React from 'react';
import s from "./Input.module.css"

export const Input = (props: any) => {
    return (
        <div>
            <input {...props.field} className={s.input}/>

        </div>
    );
};

