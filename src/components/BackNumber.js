import React from 'react';

class BackNumber extends React.Component{
    render(){
        const numChars = this.props.number.toString().split("");
        let jsx = [];
        for(let i = 0; i < numChars.length; i++){
            jsx.push(<div className="div-block-total-num">{numChars[i]}</div>);
        }
        return jsx;
    }
}

export default BackNumber;