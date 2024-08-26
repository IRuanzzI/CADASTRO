/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState, useRef } from 'react'
import './home.css'
import Trash from '../../assets/trash.svg'
import api from '../../services/api'

function Home() {

  const [users, setUsers] = useState([])

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function getUsers() {
    const usersFromApi = await api.get('/users') // Consome os dados da API
    setUsers(usersFromApi.data)
  }

  async function createUsers() {
    await api.post('/users', {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value
    })

    // AQUI Limpa os campos de entrada após o cadastro
    inputName.current.value = ''
    inputAge.current.value = ''
    inputEmail.current.value = ''

    // Atualiza a lista de usuários após cadastrar um novo
    getUsers()
  }

  async function deleteUsers(id) {
    await api.delete(`/users/${id}`)

    getUsers()
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className="container">
      <form>
        <h1>Cadastro de usuário...</h1>

        <input name='name' placeholder='Nome...' type='text' ref={inputName} />
        <input name='age' placeholder='Idade...' type='number' ref={inputAge} />
        <input name='email' placeholder='Email...' type='email' ref={inputEmail} />
        <button type='button' onClick={createUsers}>Cadastrar</button>
      </form>

      {users.map(user => (
        <div key={user.id} className='card'>
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button onClick={() => deleteUsers(user.id)}>
            <img src={Trash} alt="Excluir usuário" />
          </button>
        </div>
      ))}
    </div>
  )
}

export default Home;
