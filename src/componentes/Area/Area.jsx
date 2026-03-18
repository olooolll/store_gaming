import React from "react";
import Produtos from "../Produtos/Produtos.jsx";
import "./Area.css";

function Area(props){
    if (props.produtos.length > 0) {
        return (
            <section className="area">
                <div className="area-grid">
                    {props.produtos.map(produto => (
                        <div
                            key={produto.nome}
                            className={`area-card ${produto.secao?.toLowerCase() || ""}`}
                        >
                            <Produtos produto={produto} />
                        </div>
                    ))}
                </div>
            </section>
        );
    }
    return null;
}

export default Area;