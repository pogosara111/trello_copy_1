import React from 'react';
import { useParams } from 'react-router-dom';

export const Board = () => {

    const {board_id}: any = useParams()
    console.log(board_id)

    return (
        <div>

        </div>
    );
};

