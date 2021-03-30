import {instance} from "./instance";

export const columnAPI =  {
    getColumns(board_id: string){
        return instance.get(`/column?board_id=${board_id}`)
    },
    addColumn(board_id: string, title: string) {
        return instance.post(`/column`, {board_id, title})
    },
    deleteColumn(column_id: string) {
        return instance.delete(`/column/${column_id}`)
    },
    updateColumn(column_id: string, title: string) {
        return instance.put(`/column/${column_id}`, {title})
    }
}
