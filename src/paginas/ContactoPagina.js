import React from "react";

export default class ContactoPagina extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            nombre: '',
            mensaje: ''
        }

        this.submitted = this.submitted.bind(this);
        this.changed = this.changed.bind(this);
    }

    submitted(event) {
        alert("se envio el formulario");
        event.preventDefault();
    }

    changed(event){
        this.setState({
             nombre : event.target.value
        })
    }

    render() {
        return(
            <>
            <div className="mt-5 pt-4">
                <h2> Contacto </h2>
            </div>
            
            <form onSubmit={this.submitted}>
                <div className="form-gruop my-2">
                    <label>Nombre</label>
                    <input type="text" className="form-control" onChange={this.changed}/>
                </div>
                <div className="form-group my-2">
                    <label>Mensaje</label>
                    <textarea className="form-control"></textarea>
                </div>
                <button type="submit" className="btn btn-primary mt-2"> Enviar</button>
            </form>


            </>
        )
    }
}
