import React from 'react';
import '../css/header.css'
import weatherImg from '../images/weather.png'
import {connect} from 'react-redux';

class Header extends React.Component{
    render(){
        const {title,titleClick} = this.props;
        return(
            <div className="header">
                <div className="div-title"></div>
                <div id="menu"></div>
                <div id="div_title" className="div-title-second" onClick={titleClick}>{title}</div>
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
    return {title: state.title}
}
function mapDispatchToProps(dispatch) {
    return {titleClick: () => dispatch({type: "titleClick"})}
}

// const Header = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(HeaderUI);

// export default Header;
export default connect(mapStateToProps,mapDispatchToProps)(Header);