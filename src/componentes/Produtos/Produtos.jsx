import React from "react";
import "./Produtos.css";

function Produtos(props) {
    const { produto } = props;

    return (
        <div className="produto">
            <div className="cabecalho">
                <img src={produto.imagem || "/img/placeholder.png"} alt={produto.nome}/>
            </div>

            <div className="rodape">
                <h4>{produto.secao}</h4>
                <h4>{produto.marca}</h4>
                <h4>{produto.nome}</h4>
                <h4>R$ {produto.preco}</h4>
            </div>
        </div>
    );
}

export default Produtos;