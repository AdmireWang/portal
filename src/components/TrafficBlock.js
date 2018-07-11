import React from 'react';
import Container from './Container';
import BoxTitle from './BoxTitle';
import Box from './Box';
import BackNumber from './BackNumber';
import {connect} from "react-redux";
import {store} from "../redux/redux";
import PanelSmall from './PanelSmall';
import {Link,Route} from 'react-router-dom';


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
    componentDidMount(){
        store.dispatch({
            type: 'SET_CURRENT_PAGE',
            payload:{
                currentPage: "trafficBlock"
            }
        });
        // store.dispatch({
        //     type: "SET_CURRENT_LEVEL",
        //     payload: {
        //         currentLevel: 1
        //     }
        // });
        store.dispatch(getDataAction());
    }
    render(){
        const {totalBlockNum,setLevel,match,currentLevel} = this.props;
        const firstLevelDisplay = currentLevel == 1 ? "block" : "none";
        return(
            <div>
                <Container position="left" display={firstLevelDisplay}>
                    <BoxTitle content="当前数据统计"/>
                    <Link to={`${match.url}/currentBlock`}>
                        <Box id="div_block_total_count" title="阻断事件总数">
                            <div id="div_block_total_content" className="div-block-total-content">
                                <BackNumber number={totalBlockNum}/>
                            </div>
                        </Box>
                    </Link>
                    <Box title="封闭里程">
                        <div className="div-cols-container">
                            <PanelSmall text="封闭收费站" num="5" unit="个" className="div-block-col-border-right div-block-col-border-bottom"/>
                            <PanelSmall text="限型收费站" num="14" unit="个" className="div-block-col-border-bottom"/>
                            <PanelSmall text="封闭总里程" num="3231" unit="km" className="div-block-col-border-right"/>
                            <PanelSmall text="限型总里程" num="14" unit="km" className=""/>
                        </div>
                    </Box>
                </Container>
                <Container position="right" display={firstLevelDisplay}>
                    <BoxTitle content="当前数据统计"/>
                    <Box title="阻断事件总数" />
                </Container>

                <Route path={`${match.path}/currentBlock`} render={({match})=>{
                    setLevel(2);
                    return <Box title="当前阻断事件" id="div_road_traffic_index_list" className="div-right-in"/>
                }} />
            </div>
        )
    }
}

const GET_DATA = 'GET_DATA',
    GET_DATA_SUCCESS = 'GET_DATA_SUCCESS',
    GET_DATA_FAILED = 'GET_DATA_FAILED';

const getDataAction =function (id) {
    return function (dispatch, getState) {
        dispatch({
            type: GET_DATA,
            payload: id
        });
        fetch("http://localhost/smartroad/portal/getBlockCount").then(function (response) {
            if(response.status == 200){
                response.json().then(function (data) {
                    console.log(data);
                    dispatch({
                        type: GET_DATA_SUCCESS,
                        payload: data
                    })
                });
            }
        }).catch(function (error) {
            dispatch({
                type: GET_DATA_FAILED,
                payload: error
            })
        })
    }
}

function mapStateToProps(state){
    return {
        title: state.title,
        totalBlockNum: state.totalBlockNum,
        currentLevel: state.currentLevel
    }
}

function mapDispatchToProps(dispatch){
    return{
        setLevel: (level) => dispatch({type:"SET_CURRENT_LEVEL",payload:{currentLevel:level}})
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TrafficBlock);