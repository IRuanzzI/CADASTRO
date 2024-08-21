/* eslint-disable jsx-a11y/alt-text */
import './home.css'
import Trash from '../../assets/trash.svg'

function Home() {

  const users = [

    {

      id: '28384y384s',
      name: 'Ruan',
      age: 19,
      email: 'ruanteste@gmail.com',

    },
    {

      id: '12342352564ss',
      name: 'Maria',
      age: 21,
      email: 'mariateste@gmail.com',

    },

    {

      id: '12asdawerq3434',
      name: 'Mary',
      age: 45,
      email: 'maryteste@gmail.com',

    }
  ]
    //TODO: MINUTO 40:44
  return (
    <div className="container">
      <form>
        <h1>Cadastro de usuário...</h1>

        <input name='name' placeholder='Nome...' type='text'></input>
        <input name='age' placeholder='Idade...' type='number'></input>
        <input name='email' placeholder='Email...' type='email'></input>
        <button type='button'>Cadastrar</button>
      </form>

      {users.map(user => (

          < div key={user.id} className='card' >
            <div>
              <p>Nome: <span>{user.name}</span> </p>
              <p>Idade: <span>{user.age}</span> </p>
              <p>Email: <span>{user.email}</span> </p>
            </div>
            <button>
              <img src = {Trash}/>
            </button>
          </div>

        ))}

      
    </div >
  )
}

export default Home;
