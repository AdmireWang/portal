import React from 'react';

class Container extends React.Component{
    render(){
        let className = "", id = "";
        switch (this.props.position){
            case "left":
                className = "div-left-container div-left-in";
                id = "div_left_container";
                break;
            case "right":
                className = "div-right-container div-right-in";
                id = "div_right_container";
                break;
            default:
        }
        return(
            <div id={id} className={className} style={{display: this.props.display}}>
                {this.props.children}
            </div>
        )
    }
}

export default Container;