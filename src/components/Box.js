import React from 'react';

class Box extends React.Component{
    render(){
        return(
            <div id={this.props.id} className="div-box" onClick={()=>this.props.onClick()}  style={{display:this.props.display}}>
                <div className="div-index-title div-index-title-icon">{this.props.title}</div>
                <div className="div-index-split-long"/>
                {this.props.children}
            </div>
        )
    }
}

export default Box;