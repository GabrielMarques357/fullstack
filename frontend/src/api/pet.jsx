import api from "./api"

export const getUsers = async () => {
    const response = await api.get('/api/v1/cachorros')

    if(response.status !== 200){
        return [] // throw new Error('')
    }

    return response.data.users
}

