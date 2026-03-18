import './App.css';
import Banner from "./componentes/Banner/Banner.jsx";
import Formulario from "./componentes/Formulário/Formulario.jsx"
import {useState} from "react";
import Area from "./componentes/Area/Area.jsx";

function App() {

    const [produtos, setProdutos] = useState([]);
    const aoProdutoCadastrado = (produto) => {
        const novaLista = produtos.slice();
        novaLista.push(produto);
        setProdutos(novaLista);
    }

    const secoes = [
        {"nome": "Computadores", "corPrincipal": "#E6392F", "corSecundaria": "#FF6F61"},
        {"nome": "Acessórios", "corPrincipal": "#FFD23F", "corSecundaria": "#FFF3B0"},
        {"nome": "Impressoras", "corPrincipal": "#1F4E79", "corSecundaria": "#4F83CC"},
        {"nome": "Games", "corPrincipal": "#2EC4B6", "corSecundaria": "#6FFFE9"},
        {"nome": "Gadgets", "corPrincipal": "#3A3A3A", "corSecundaria": "#8D99AE"}
    ];

    const marcas = [
        {"nome": "HP"},
        {"nome": "Positivo"},
        {"nome": "Dell"},
        {"nome": "ASUS"},
        {"nome": "Xing Ling"}
    ];

    return (
        <div>
            <Banner />

            <Formulario
                aoProdutoCadastrado={produto => aoProdutoCadastrado(produto)}
                secoes={secoes}
                marcas={marcas}
            />

            {secoes.map((secao) => {
                    return (<Area
                        key={secao.nome}
                        nome={secao.nome}
                        corPrimaria={secao.corPrimaria}
                        corSecundaria={secao.corSecundaria}
                        produtos={produtos.filter(produto => produto.secao === secao.nome)}
                    />);
                }
            )}

        </div>
      );
}

export default App
