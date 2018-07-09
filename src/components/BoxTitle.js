import React from 'react';

class BoxTitle extends React.Component{
    render(){
        return(
            <div className="div-box-title">{this.props.content}</div>
        )
    }
}

export default BoxTitle;