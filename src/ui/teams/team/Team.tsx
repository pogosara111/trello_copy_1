import React from 'react';
import {EditableSpan} from "../../../components/EditableSpan";
import s from "./Team.module.css";

type TeamType = {
    updateTeam: (name: string) => void,
    deleteTeam: (team_id: string) => void,
    id: string,
    name: string
}

export const Team = (props:TeamType) => {

    const updateTeamName = (value: string) => {
        props.updateTeam(value)
    }

    return (
        <div>
            <div className={s.buttonRows} key={props.id}> Team:
                <EditableSpan onClickEnter={updateTeamName} value={props.name}
                />
                <span><button onClick={()=> props.deleteTeam(props.id)}>delete</button> </span>
            </div>
        </div>
    );
};
