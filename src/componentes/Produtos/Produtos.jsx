import React from "react";
import "./Produtos.css";

function Produtos({ produto, corPrincipal, corSecundaria }) {

    const estilo = {
        background: `linear-gradient(135deg, ${corPrincipal}, ${corSecundaria})`
    };

    if (!produto) return null;

    return (
        <div className="produto">
            <div className="cabecalho" style={estilo}>
                <img
                    src={produto.imagem || "/img/placeholder.png"}
                    alt={produto.nome}
                />
            </div>

            <div className="rodape">
                <h3 className="nome">{produto.nome}</h3>

                <div className="info">
                    <span className="tag">{produto.secao}</span>
                    <span className="tag">{produto.marca}</span>
                </div>

                <div className="preco">
                    R$ {produto.preco}
                </div>

                <div className={`condicao ${produto.radio?.toLowerCase()}`}>
                    {produto.radio}
                </div>
            </div>
        </div>
    );
}

export default Produtos;