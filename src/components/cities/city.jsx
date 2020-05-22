import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";
class Ciudad extends Component{
    state = {
        titulo:this.props.titulo,
        url:this.props.url
    }

    render(){
        return(

                <div className="items-city">
                    <Link style={{backgroundImage: `url(${this.props.url})`}} className="item-city text-images bg-images" to={`/rumi/ciudad/${this.props.titulo}`}>
                    {this.props.titulo}
                    </Link>


                    {/* <a style={{backgroundImage: `url(${this.props.url})`}} className="item-city text-images bg-images" href="/">
                    {this.props.titulo}
                    </a> */}
                </div>
        );
    }
}

export default Ciudad;

