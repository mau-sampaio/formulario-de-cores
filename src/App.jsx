import { useState } from 'react';
import style from './app.module.css';
import { CardList } from './components/CardList/CardList';

function App() {
  const [colorList, setColorList] = useState([])
  const [nome, setNome] = useState('');
  const [cor, setCor] = useState('');
  const [erro, setErro] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (nome.length < 3 || nome.startsWith(" ") || cor.length < 6 || !cor.startsWith("#")) {
      return setErro(true)
    }

    setErro(false)

    setColorList((prevList) => [...prevList, { nome, cor }])

    setNome('');
    setCor('');
  }

  return (
    <>
      <div className={style.container}>
        <div className={`${style.formulario} ${erro ? style.erro : ''}`} >
          <h2>ADICIONAR NOVA COR</h2>
          <form onSubmit={handleSubmit}>
            <div className={`${style.campo} ${erro ? style.erro : ''}`}>
              <label htmlFor="nome">
                Nome
              </label>
              <input type="text"
                id='nome'
                value={nome}
                onChange={(event) => setNome(event.target.value)} />
            </div>
            <div className={`${style.campo} ${erro ? style.erro : ''}`}>
              <label htmlFor="cor">
                Cor
              </label>
              <input type="text"
                id='cor'
                value={cor}
                placeholder='Insita sua cor no formato Hexadecimal'
                onChange={(event) => setCor(event.target.value)} />
            </div>
            <div className={style.botao}>
              <button className={erro ? 'erro' : ''} type='submit'>ADICIONAR</button>
            </div>
          </form>
        </div>
        {erro && <p className={style.aviso}>Por favor, verifique os dados inseridos no formulário</p>}
        <CardList colorList={colorList} />
      </div>
    </>
  )
}

export default App
