
import { useEffect, useState } from 'react'
import { deleteUser, getUsers } from '../api/users'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import './styles.css'




function Users() {

    const [conteudo, setConteudo] = useState(<>Carregando...</>)
   

    const handleDelete = async (id) => {
       const response = await deleteUser(id)

        if(response.status !== 204) {
            toast("Erro ao deletar, tente nomavente, mais tarde")
            return
        }

        window.location.reload()
    }

    async function TranformaEmLista() {
        const todosUsuarios = await getUsers()

        return todosUsuarios.map(user =>
            <div className='user' key={user.id}>
                <label>{ user.nome }</label>
                <label>{ user.email }</label>
                <div className='actions'>
                    <button onClick={() => handleUpdate(user)}>Alterar</button>
                    <button type='button' onClick={() => handleDelete(user.id)}>Deleta</button>
                </div>
            </div>
        )
    }

    useEffect(() => {
        async function carregar() {
            setConteudo(await TranformaEmLista())
        }
        carregar()
    }, [])


    return (
        <>
            <main>
                <div className='user-list'>
                    <Link to={'/create/user'}>
                    <button>Criar</button>
                    </Link>
                    <div className='user header' key='header'>
                    <label>Nome</label>
                    <label>Email</label>
                    <label>Ações</label>
                    </div>
                    {conteudo}
                </div>
            </main>
        </>
    )
}

export default Users
