import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto.js';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = (props) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('Programação');

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoCadastrar({nome, cargo, imagem, time});

        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    };

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" valor={nome} aoAlterar={valor => setNome(valor)} />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" valor={cargo} aoAlterar={valor => setCargo(valor)} />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" valor={imagem} aoAlterar={valor => setImagem(valor)} />
                
                <ListaSuspensa obrigatorio={true} label="Time" itens={props.times} valor={time} aoAlterar={valor => setTime(valor)}/>
                
                <Botao>Criar Card</Botao>
            </form>
        </section>
    );
}

export default Formulario;