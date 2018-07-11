import React from 'react';
import '../css/header.css'
import weatherImg from '../images/weather.png'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Header extends React.Component{
    render(){
        const {title,currentPage,setLevel} = this.props;
        return(
            <div className="header">
                <div className="div-title"></div>
                <div id="menu"></div>
                <Link to={"/"+currentPage}>
                    <div id="div_title" className="div-title-second" onClick={()=>{setLevel(1)}}>{title}</div>
                </Link>
                <div id="div_title_third" className="div_title_third"></div>
                <div id="div_header_right">
                    <div id="div_header_exit" onClick="window.location.href='../portal/index';"></div>
                    <div className="header-split"></div>
                    <div id="div_header_weather">
                        <img id="img_header_weather" src={weatherImg} />
                            <div id="div_weather_text">
                                <div id="div_weather_desc">阴</div>
                                <div id="div_weather_temp">-9℃~-2℃</div>
                                <div id="div_weather_wind">西北风 1级</div>
                            </div>
                    </div>
                    <div className="header-split"></div>
                    <div id="div_header_datetime">
                        <div id="div_header_date"></div>
                        <div id="div_header_time"></div>
                    </div>

                </div>

            </div>
        )
    }
}

function mapStateToProps(state){
    return {title: state.title,currentPage: state.currentPage}
}
function mapDispatchToProps(dispatch) {
    return {
        setLevel: (level) => dispatch({type:"SET_CURRENT_LEVEL",payload:{currentLevel:level}})
    }
}

// const Header = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(HeaderUI);

// export default Header;
export default connect(mapStateToProps,mapDispatchToProps)(Header);