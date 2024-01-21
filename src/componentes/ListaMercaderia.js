import React from "react";
import Mercaderia from "./Mercaderia";

export default class ListaMercaderia extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <>
            {this.props.mercaderia.map((mercaderia) => (
                <Mercaderia nome={mercaderia.nome}  img={mercaderia.img} />
            ))}
            </>
        );
    }
}