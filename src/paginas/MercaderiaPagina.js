import React from "react";
import ListaMercaderia from "../componentes/ListaMercaderia";


export default class MercaderiaPagina extends React.Component {

mercaderia = [
    {
        nome: "hola",
          img:"img/n9.jpeg"
    },
    {
      nome:'Adidas Forum',
      img:"img/n3.jpeg"
  },
]

  render() {
    return (
      <div className="container mx-5 my-5 py-5">
        <h2> Mas modelos disponibles por encargo. </h2>
        <ListaMercaderia mercaderia={this.mercaderia} />
         
      </div>
    );
  }
}
