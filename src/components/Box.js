import React from 'react';

class Box extends React.Component{
    render(){
        return(
            <div id={this.props.id} className={"div-box "+this.props.className}>
                <div className="div-index-title div-index-title-icon">{this.props.title}</div>
                <div className="div-index-split-long"/>
                {this.props.children}
            </div>
        )
    }
}

export default Box;