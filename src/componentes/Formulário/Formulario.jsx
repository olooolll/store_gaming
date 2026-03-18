import ListaSuspensa from "../ListaSuspensa/ListaSuspensa.jsx";
import CampoTexto from "../CampoTexto/CampoTexto.jsx";
import Botao from "../Botoes/Botoes.jsx";
import React, { useState} from "react";
import "./Formulario.css";


const Formulario = (props) => {

    const [secao, setSecao] = useState("");
    const [marca, setMarca] = useState("");
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("");

    const aoSalvar = (e) => {
        e.preventDefault();
        props.aoProdutoCadastrado(
            {
                "secao": secao,
                "marca": marca,
                "nome": nome,
                "preco": preco
            }
        )

        setSecao("");
        setMarca("");
        setNome("");
        setPreco("");
    }

    return (
        <section>
            <form onSubmit={aoSalvar}>
                <ListaSuspensa
                    label="Seções"
                    itens={props.secoes.map(secao => secao.nome)}
                    aoAlterado={valor => setSecao(valor)}
                />

                <ListaSuspensa
                    label="Marcas"
                    itens={props.marcas.map(marca => marca.nome)}
                    aoAlterado={valor => setMarca(valor)}
                />

                <CampoTexto
                    label="Nome"
                    placeholder="Informe o categoria do produto"
                    aoAlterado={valor => setNome(valor)}
                />

                <CampoTexto
                    label="Preço"
                    placeholder="Informe o categoria do produto"
                    aoAlterado={valor => setPreco(valor)}
                />

                <Botao>Adicionar produto</Botao>
            </form>
        </section>
    );
}

export default Formulario;