import React from "react";
import { Link } from "react-router-dom";


export default class Menu extends React.Component {

    render() {
        return(
            <div className="row">
                <div className=" col-12 d-flex aling-items-center bg-secondary fixed-top py-2 px-4">
                    <h1>Xshoes</h1>
                <Link to="/" className=" mx-3"> Inicio </Link>
                    <Link to="/mercaderia" className=" mx-3"> Stock </Link>
                    <Link to="/contactos" className=" mx-3"> Contacto </Link>
                    <Link to="/lanzamientos" className=" mx-3"> Nuevos Ingresos </Link>

                </div>

            </div>
            
        )
    }

}