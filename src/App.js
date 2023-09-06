import { useState } from 'react';
import Banner from './componentes/Banner/Banner.js';
import Formulario from './componentes/Formulario/index.js';
import Time from './componentes/Time/index.js';
import Rodape from './componentes/Rodape/index.js';
import { v4 as uuidv4 } from 'uuid';

import { MdOutlineLibraryAdd } from 'react-icons/md';
import Botao from './componentes/Botao/index.js';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#57C278',
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#82CFFA',
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#A6D157',
    },
    {
      id: uuidv4(),
      nome: 'DevOps',
      cor: '#E06B69',
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#DB6EBF',
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFBA05',
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FF8A29',
    },
  ]);

  const [colaboradores, setColaboradores] = useState([]);

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  function mudarCorTime(cor, id) {
    setTimes(times.map(time => {
      if (time.id === id) time.cor = cor;

      return time;
    }));
  }

  function cadastrarTime(novoTime) {
    setTimes([...times, { id: uuidv4(), ...novoTime }])
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if (colaborador.id === id) colaborador.favorito = !colaborador.favorito;
      return colaborador;
    }));
  }

  function esconderSecao() {
    setColaboradores(colaboradores.filter(colaborador => colaborador == ''));
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        times={times.map(time => time.nome)}
        colaboradorID={uuidv4()}
        aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])}
        cadastrarTime={cadastrarTime}
      />

      <section className="titulo">
        <h2>Minha Organização:</h2>
        <Botao className="botao">
          <MdOutlineLibraryAdd size={62} onClick={esconderSecao} />
        </Botao>
      </section>

      {times.map(
        time => <Time
          id={time.id}
          mudarCor={mudarCorTime}
          key={time.nome}
          nome={time.nome}
          cor={time.cor}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}
          aoFavoritar={resolverFavorito}
        />
      )}

      <Rodape />
    </div>
  );
}

export default App;
