import React from "react";

function Produtos(props) {
    console.log(props);
    return (
        <div className="produto">
            <div className="cabecalho">
                <img src="Não tem" alt="produto"/>
            </div>

            <div className="rodape">
                <h4>{props.produto.secao}</h4>
                <h4>{props.produto.marca}</h4>
                <h4>{props.produto.nome}</h4>
                <h4>{props.produto.preco}</h4>
            </div>
        </div>
    );
}

export default Produtos;