import './Formulario.css'
import Campo from '../Campo/Campo.js';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = (props) => {

    const id = props.colaboradorID;
    const favorito = false;
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    const [nomeTime, setNomeTime] = useState('');
    const [corTime, setCorTime] = useState('#FFFFFF');

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoCadastrar({id, nome, cargo, imagem, time, favorito});

        setCorTime('#FFFFFF');
        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    };

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Campo obrigatorio={true} label="Nome" placeholder="Digite seu nome" valor={nome} aoAlterar={valor => setNome(valor)} />
                <Campo obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" valor={cargo} aoAlterar={valor => setCargo(valor)} />
                <Campo label="Imagem" placeholder="Digite o endereço da imagem" valor={imagem} aoAlterar={valor => setImagem(valor)} />
                
                <ListaSuspensa obrigatorio={true} label="Time" itens={props.times} valor={time} aoAlterar={valor => setTime(valor)}/>
                
                <Botao>Criar Card</Botao>
            </form>

            <form onSubmit={(evento) => {
                evento.preventDefault();
                props.cadastrarTime({nome: nomeTime, cor: corTime});
            }}>
                <h2>Preencha os dados para criar um novo time</h2>
                <Campo obrigatorio label="Nome" placeholder="Digite o nome do time" valor={nomeTime} aoAlterar={valor => setNomeTime(valor)} />
                <Campo obrigatorio type="color" label="Cor" placeholder="Digite a cor do time" valor={corTime} aoAlterar={valor => setCorTime(valor)} />
                
                <Botao>Criar um novo time</Botao>
            </form>
        </section>
    );
}

export default Formulario;