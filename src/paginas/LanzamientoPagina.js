import React from "react";


export default class ListaMercaderia extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lanzamientos: []
        }
       
    }

    componentDidMount() {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {
          this.setState({
            lanzamientos: json
          });
        })
      

    }

    render(){
        return(
            <>
            <div className="container py-5">

            
            {this.state.lanzamientos.map((lanzamiento) => (
               <p className="my-5" key={lanzamiento.id}>{lanzamiento.id} {lanzamiento.title} 
               {lanzamiento.price} 
               {lanzamiento.category}
                {lanzamiento.description} 
                {lanzamiento.image}
                 {lanzamiento.img} </p>  
            ))}        
            
                 </div>                                                                       
            </>
        );
    }
}


