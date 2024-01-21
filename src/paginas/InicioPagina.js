import React from "react";
import Mercaderia from "../componentes/Mercaderia";

export default class InicioPagina extends React.Component {

    render() {
        return(
        <>
         
      
     <div>  
          <h2 className="">Inicio </h2> 

      <Mercaderia stock="Calzado de Niño." 
      modelo="Nike Travis Scott" 
      img="img\n8.jpeg"/>

      <Mercaderia stock="Calzado."
       modelo="Nike air jordan one." 
       img="img/n9.jpeg"/>

      <Mercaderia stock="Remera Masculina." 
      modelo="Balenciaga " 
      img="img/r3.jpeg"/>

      <Mercaderia stock="Buzo Masculino."
       modelo="Dior" 
       img="img\r4.jpeg"/>
      </div>
    
        </>
                  
                   
            
        )
    }

}