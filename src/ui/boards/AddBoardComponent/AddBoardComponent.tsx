import React, {ChangeEvent, useState} from "react";

export const AddBoardComponent = (props: any) => {
    const [isAddBoard, setIsAddBoard] = useState(false)
    const [value, setValue] = useState('')

    const onChangeModeBoard = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)

    }

    const addBoardOff = () => {
        setIsAddBoard(!isAddBoard)
        props.addBoard(value)
    }

    const addBoardOn = () => {
        setIsAddBoard(!isAddBoard)
    }

    const onPressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        e.charCode === 13 && addBoardOff()
    }
    return (
        <div>
            {
                isAddBoard
                    ? <div>
                        <input onChange={onChangeModeBoard} onKeyPress={onPressEnter} value={value}/>
                        <span><button onClick={addBoardOff}>ok</button></span>
                    </div>
                    : <div>
                        <button onClick={addBoardOn}>add Board</button>
                    </div>
            }
        </div>
    );
};
