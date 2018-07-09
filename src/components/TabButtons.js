import React from 'react';
import {Link,Route,Switch} from 'react-router-dom';

class TabButtons extends React.Component{
    render(){
        return(
            <div className="footer_content">
                <div className="footer_tab">
                    <div className="button_tab dtlk"><Link to="dynamicRoadCondition">动态路况</Link></div>
                    <div className="button_tab jtzd"><Link to="trafficBlock">交通阻断</Link></div>
                    <div className="button_tab lwaq">路网安全</div>
                    <div className="button_tab rycl">人员车辆</div>
                    <div className="button_tab dlzc">道路资产</div>
                    <div className="button_tab sbyw">设备运维</div>
                    <div className="button_tab xmgl">项目管理</div>
                    <div className="button_tab sfgl">收费管理</div>
                    <div className="button_tab xxfw">信息服务</div>
                </div>
            </div>
        )
    }
}

export default TabButtons;