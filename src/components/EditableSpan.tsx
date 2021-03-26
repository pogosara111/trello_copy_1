import React, {ChangeEvent, useState} from 'react';

type EditableSpanType = {
    value: string
    onClickEnter: (value: string) => void
}

export const EditableSpan = (props: EditableSpanType) => {

    const [editMode, setEditMode] = useState(false)
    const [value, setValue] = useState<string>(props.value);

    const onChangeEditableSpan = (e:ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const changeEditMode = () => {
        setEditMode(true)
    }

    const onKeyPressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.charCode === 13){
            setEditMode(false)
            props.onClickEnter(value)
        }
    }

    return (
        <div>
            {editMode
                ? <input autoFocus onKeyPress={onKeyPressEnter}
                         onChange={onChangeEditableSpan} value={value}/>
                : <div>
                    <span>{value}</span>
                    <button onClick={changeEditMode}>edit</button>

            </div>

            }
        </div>
    );
};

