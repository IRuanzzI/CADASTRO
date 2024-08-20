import './home.css'
import Trash from '../../assets/trash.svg'

function Home() {
  return (
    <div className="container">
      <form>
        <h1>Cadastro de usuário...</h1>

        <input name='name' type='text'></input>
        <input name='years' type='number'></input>
        <input name='email' type='email'></input>
        <button type='button'>Cadastrar</button>
      </form>

      <div>
        <div>
          <p>Nome:</p>
          <p>Idade:</p>
          <p>Email:</p>
        </div>
        <button>
          <img src = {Trash}/>
        </button>
      </div>
    </div>
  );
}

export default Home;
