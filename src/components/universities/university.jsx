import React, { Component } from 'react';
class Universidad extends Component{
    state = {
        titulo:this.props.titulo,
        url:this.props.url
    }

    render(){
        return(
                <div className="items-uni">
                    <a style={{backgroundImage: `url(${this.props.url})`}} className="item-uni text-images bg-images" href="/">
                    {this.props.titulo}
                    </a>
                </div>
        );
    }
}

export default Universidad;

