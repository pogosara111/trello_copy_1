import React, {ChangeEvent, useState} from "react";
import {NavLink} from "react-router-dom";

export const ModeBoard = (props: any) => {

    const [editMode, setEditMode] = useState(false);
    const [value, setValue] = useState(props.title)

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const editModeOff = () => {
        props.updateBoard(props.board_id, value)
        setEditMode(false)

    }

    const editModeOn = () => {
        setEditMode(!editMode)
    }

    return (
        <div>
            {
                editMode
                    ? <div>
                        <input onChange={onChangeValue} value={value}/>
                        <span><button onClick={editModeOff}>ok</button></span>
                    </div>
                    : <div>
                        <NavLink to={`/board/${props.board_id}`}>{props.title}</NavLink>
                        <span><button onClick={editModeOn}>edit</button></span>
                    </div>
            }

        </div>
    );
};


