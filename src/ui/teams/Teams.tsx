import React, {ChangeEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../bll/store";
import {
    addTeamTC, deleteTeamTC,
    getTeamsTC,
    setTeamDescriptionAC,
    setTeamNameAC,
    TeamType,
    updateTeamTC
} from "../../bll/reducers/reducerTeams";
import {EditableSpan} from "../../components/EditableSpan";
import { Team } from './team/Team';
import {Boards} from "../boards/Boards";

export const Teams = () => {

    const user_id = useSelector<RootStateType, string>(state => state.auth.id)
    const teams = useSelector<RootStateType, Array<TeamType>>(state => state.teams.teams)
    const teamName = useSelector<RootStateType, string>(state => state.teams.teamName)
    const teamDescription = useSelector<RootStateType, string>(state => state.teams.teamDescription)


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTeamsTC(user_id))
    }, [user_id])


    const onChangeTeamName = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setTeamNameAC(e.currentTarget.value))
    }

    const onChangeTeamDescription = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setTeamDescriptionAC(e.currentTarget.value))
    }

    const addTeam = () => {
        dispatch(addTeamTC(user_id, teamName, teamDescription))
        dispatch(setTeamNameAC(""))
        dispatch(setTeamDescriptionAC(""))
    }

    const deleteTeam = (team_id: string) => {
        dispatch(deleteTeamTC(user_id, team_id))
    }

    return (

        <div>

            <div>Name: <input onChange={onChangeTeamName} value={teamName}/></div>
            <div>Description: <input onChange={onChangeTeamDescription} value={teamDescription}/>
                <button onClick={addTeam}>add team</button>
            </div>

            {
                teams.map(team => {

                    const updateTeam = (name: string) => {
                        dispatch(updateTeamTC(team._id, name))
                    }

                    return <Team id={team._id}
                                 name={team.name}
                                 updateTeam={updateTeam}
                                 deleteTeam={deleteTeam}
                    />
                } )
            }
            <Boards/>
        </div>
    );
};

