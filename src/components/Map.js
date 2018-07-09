import React from 'react';

class Map extends React.Component{
    render(){
        return(
            <iframe id="iframe_map" src="http://localhost/mapServer/resources/ArcGIS/project/portal/portal-index.html"></iframe>
        )
    }
}

export default Map;