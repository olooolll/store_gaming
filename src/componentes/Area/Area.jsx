import React from "react";
import Produtos from "../Produtos/Produtos.jsx";

function Area(props){
    if (props.produtos.length > 0) {
        return (
            <section>
                {props.produtos.map(produto => (
                    <Produtos
                        key={produto.nome}
                        produto={produto}
                    />
                ))}
            </section>
        );
    }
    return "";
}

export default Area;