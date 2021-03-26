import React, {useEffect} from 'react';
import s from "./Boards.module.css"
import {useDispatch, useSelector} from "react-redux";
import {ReducerBoardsType, setBoardsTC} from "../../bll/reducers/reducerBoards";
import {RootStateType} from "../../bll/store";

type BoardsType = {
    team_id: string
}

export const Boards = (props: BoardsType) => {

    const boards = useSelector<RootStateType, ReducerBoardsType>(state => state.boards)

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(setBoardsTC(props.team_id))
    }, [props.team_id])

    const newArr = boards[props.team_id]

    return (
        <div>
            <div className={s.boards}>
                {
                   newArr.map(item => <div key={item._id}>{item.title}</div>)
                }
            </div>

        </div>
    );
};

