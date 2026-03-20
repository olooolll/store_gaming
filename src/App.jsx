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
        {"nome": "HP", "url": "https://login3.id.hp.com/login3/static/media/hP.03f9c77.05f6028de6b55f68631d3546325b60e9.svg"},
        {"nome": "Positivo", "url": "https://www.meupositivo.com.br/assets/img/positivo-logo-branca.png?v=1.0"},
        {"nome": "Dell", "url": "https://cdn.worldvectorlogo.com/logos/dell-2.svg"},
        {"nome": "ASUS", "url": "https://www.freepnglogos.com/uploads/logo-asus-png/asus-logo-hd-photo-15.png"},
        {"nome": "Xing Ling", "url": "https://guia.folhadecampolargo.com.br/upload/anuncios/galerias/af06a78a690006c6eb596fae9bfa6543.jpg"}
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
                        produtos={
                            produtos.filter(produto => produto.secao === secao.nome)
                        }
                    />);
                }
            )}

        </div>
      );
}

export default App
