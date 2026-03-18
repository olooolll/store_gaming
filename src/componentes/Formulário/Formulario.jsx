import React, { useState } from "react";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa.jsx";
import CampoTexto from "../CampoTexto/CampoTexto.jsx";
import Radio from "../Radio/Radio.jsx";
import Botao from "../Botoes/Botoes.jsx";
import "./Formulario.css";

const Formulario = ({ secoes, marcas, aoProdutoCadastrado }) => {
    const getURL = (valor) => {
        for(let marca of marcas){
            if(marca.nome === valor) return marca.url;
        }
    }

    const [form, setForm] = useState({
        secao: "",
        marca: "",
        nome: "",
        preco: "",
        radio: ""
    });

    const aoMudanca = (campo, valor) => {
        setForm(prev => ({
            ...prev,
            [campo]: valor
        }));
    };

    const radios = ["Novo", "Usado"];

    const aoSalvar = (e) => {
        e.preventDefault();
        let flag = true;
        for(const key in form){
            if(form["nome"] === "") flag = false;
            if(form["preco"] <= 0) flag = false;
        }
        if(flag) {
            form["imagem"] = getURL(form.marca);
            aoProdutoCadastrado(form);
        } else {
            console.log("Não foi possivel realizar o cadastro");
        }


        setForm({
            secao: "",
            marca: "",
            nome: "",
            preco: "",
            radio: ""
        });
    };

    const listaSecoes = secoes.map(s => s.nome);
    const listaMarcas = marcas.map(m => m.nome);

    return (
        <section>
            <form onSubmit={aoSalvar}>

                <ListaSuspensa
                    label="Seções"
                    itens={listaSecoes}
                    valor={form.secao}
                    aoAlterado={valor => aoMudanca("secao", valor)}
                />

                <ListaSuspensa
                    label="Marcas"
                    itens={listaMarcas}
                    valor={form.marca}
                    aoAlterado={valor => aoMudanca("marca", valor)}
                />

                <CampoTexto
                    label="Nome"
                    placeholder="Informe o nome do produto"
                    value={form.nome}
                    aoAlterado={valor => aoMudanca("nome", valor)}
                />

                <CampoTexto
                    label="Preço"
                    placeholder="Informe o preço do produto"
                    value={form.preco}
                    aoAlterado={valor => aoMudanca("preco", valor)}
                />

                <Radio
                    radios={radios}
                    valor={form.radio}
                    aoAlterado={valor => aoMudanca("radio", valor)}
                />

                <Botao>Adicionar produto</Botao>

            </form>
        </section>
    );
};

export default Formulario;