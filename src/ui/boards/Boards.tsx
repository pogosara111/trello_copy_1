import React, {useEffect} from 'react';
import s from "./Boards.module.css"
import {useDispatch, useSelector} from "react-redux";
import {
    addBoardTC,
    deleteBoardTC,
    ReducerBoardsType,
    setBoardsTC,
    updateBoardTC
} from "../../bll/reducers/reducerBoards";
import {RootStateType} from "../../bll/store";
import {AddBoardComponent} from "./AddBoardComponent/AddBoardComponent";
import {ModeBoard} from './ModeBoard/ModeBoard';

type BoardsType = {
    team_id: string
}

export const Boards = (props: BoardsType) => {

    const boards = useSelector<RootStateType, ReducerBoardsType>(state => state.boards)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setBoardsTC(props.team_id))
    }, [dispatch, props.team_id])

    const newArr = boards[props.team_id]

    const addBoard = (title: string) => {
        dispatch(addBoardTC(props.team_id, title))
    }

    const deleteBoard = (board_id: string) => {
        dispatch(deleteBoardTC(board_id, props.team_id))
    }

    const updateBoard = (board_id: string, title: string) => {
        dispatch(updateBoardTC(board_id, props.team_id, title))
    }


    return (
        <div>
            <div className={s.boards}>
                <div>
                    <AddBoardComponent addBoard={addBoard}/>
                </div>
                {
                    newArr && newArr.map(board => <div>
                            <ModeBoard board_id={board._id}
                                       title={board.title}
                                       updateBoard={updateBoard}
                            />
                            <span><button onClick={() => deleteBoard(board._id)}>delete</button></span>
                        </div>
                    )
                }
            </div>
        </div>
    );
};








