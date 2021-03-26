import {instance} from "./instance";

export const authAPI = {
    login(values: any){
        return instance.post(`/auth/login`, values)
    },
    auth(){
        return instance.post('/auth/me')
    },
    register(values: any){
        return instance.post('/auth/register', values)
    },
    logOut(){
        return instance.delete('/auth/logout')
    }

}
