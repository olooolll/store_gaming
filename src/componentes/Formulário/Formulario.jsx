import React from "react";
import CampoTexto from "../CampoTexto/CampoTexto.jsx";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa.jsx";
import Botao from "../Botoes/Botoes.jsx";

const Formulario = () => {
    const secoes = [
        "Computadores",
        "Acessórios",
        "Impressoras",
        "Games",
        "Gadgets"
    ];

    const marcas = [
        "HP",
        "Positivo",
        "Dell",
        "ASUS",
        "Xing Ling"
    ];

    const aoSalvar = (e) => {
        e.preventDefault();
        console.log("Adicionado o produto");
    }

    return (
        <section>
            <form onSubmit={aoSalvar}>
                <ListaSuspensa label="Seções" itens={secoes}/>
                <ListaSuspensa label="Marcas" itens={marcas}/>
                <CampoTexto label="Nome" placeholder="Informe o categoria do produto"/>
                <CampoTexto label="Preço" placeholder="Informe o categoria do produto"/>
                <Botao>Adicionar produto</Botao>
            </form>
        </section>
    );
}

export default Formulario;