import React from "react";
import './Mercaderia.css';


export default class Mercaderia extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            escondido: false
        }
        this.Ocultar = this.Ocultar.bind(this);
    }

    Ocultar() { 
        this.setState(prevState => ({
            oculto: !prevState.oculto
        }))

    }

    render() {
        return (  

            <div className={" row py-5 " + (this.state.oculto ? 'd-none' :  '')}>
               <div className="col-12" >
                
                  <h2>{this.props.stock}</h2>
                  <p>{this.props.modelo}</p>
                  <img className=" band-thumb" src={this.props.img} alt={this.props.nombre} />
                  <button className="btn btn-primary" onClick={this.Ocultar}> Ocultar </button>
                </div> 
            </div>  
        )
          
        

        
    }
}