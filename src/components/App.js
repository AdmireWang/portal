import React from 'react';
import Header from './Header';
import Map from './Map';
import TrafficBlock from './TrafficBlock';
import TabButtons from './TabButtons';
import {Route,Switch} from 'react-router-dom';
import {store} from "../redux/redux";

class App extends React.Component{
    render(){
        return(
                <div>
                    <Header title="动态路况"/>
                    <TabButtons/>
                    <Map/>
                    <Switch>
                        <Route path="/trafficBlock" component={TrafficBlock}></Route>
                    </Switch>
                </div>

        )
    }
}

export default App;