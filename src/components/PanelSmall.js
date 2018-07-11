import React from 'react';

class PanelSmall extends React.Component{
    render(){
        const className = "div-block-length-col " + this.props.className;
        return (
            <div className={className}>
                <div className="div-block-length-text">{this.props.text}</div>
                <div className="div-block-length-num-unit">
                    <div id="div_close_station_num" className="div-block-length-num">{this.props.num}</div>
                    <div className="div-block-length-unit">{this.props.unit}</div>
                </div>
            </div>
        )
    }
}

export default PanelSmall;