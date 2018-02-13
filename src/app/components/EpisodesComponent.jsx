import React from 'react';
import EpisodeListComponent from "./EpisodeListComponent";
import EpisodeFormComponent from "./EpisodeFormComponent";

class EpisodesComponent extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <EpisodeListComponent></EpisodeListComponent>
                <EpisodeFormComponent></EpisodeFormComponent>
            </div>
        );
    }
}

export default EpisodesComponent;
