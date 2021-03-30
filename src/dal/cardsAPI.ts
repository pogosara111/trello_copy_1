import {instance} from "./instance";

export const columnAPI =  {
    getCards(column_id: string){
        return instance.get(`//cards?board_id=${column_id}`)
    },
    addCard(column_id: string, title: string) {
        return instance.post(`/cards`, {column_id, title})
    },
    deleteCard(card_id: string) {
        return instance.delete(`/cards/${card_id}`)
    },
    updateCard(card_id: string, title: string) {
        return instance.put(`/cards/${card_id}`, {title})
    }
}
