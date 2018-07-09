import React from 'react';
import Container from './Container';
import BoxTitle from './BoxTitle';
import Box from './Box';
import BackNumber from './BackNumber';
import {connect} from "react-redux";

class TrafficBlock extends React.Component{
    // constructor(){
    //     super();
    //     this.state = {
    //         leftDisplay: "block",
    //         rightDisplay: "block",
    //         blockRankBoxDisplay: "none"
    //     };
    // }
    // handleClick(){
    //     // let state = this.state;
    //     const state = {
    //         leftDisplay: "none",
    //         rightDisplay: "none",
    //         blockRankBoxDisplay: "block"
    //     }
    //     this.setState(state);
    // }
    render(){
        const {leftDisplay,rightDisplay,blockRankBoxDisplay,blockTotalClick} = this.props;
        return(
            <div>
                <Container position="left" display={leftDisplay}>
                    <BoxTitle content="当前数据统计"/>
                    <Box id="div_block_total_count" title="阻断事件总数" onClick={blockTotalClick}>
                        <div id="div_block_total_content" className="div-block-total-content">
                            <BackNumber number="77"/>
                        </div>
                    </Box>
                    <Box title="封闭里程"/>
                </Container>
                <Container position="right" display={rightDisplay}>
                    <BoxTitle content="当前数据统计"/>
                    <Box title="阻断事件总数" />
                </Container>
                <Box title="当前阻断事件" id="div_road_traffic_index_list" display={blockRankBoxDisplay}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        leftDisplay: state.leftDisplay,
        rightDisplay: state.rightDisplay,
        blockRankBoxDisplay: state.blockRankBoxDisplay,
        title: state.title
    }
}

function mapDispatchToProps(dispatch){
    return{
        blockTotalClick: () => dispatch({type:"showBlockRankBox"})
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TrafficBlock);