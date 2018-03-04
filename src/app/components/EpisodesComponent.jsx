import React from 'react';
import CSSComponent from "./CSSComponent";
import EpisodeListComponent from "./EpisodeListComponent";
import EpisodeFormComponent from "./EpisodeFormComponent";

class EpisodesComponent extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <CSSComponent></CSSComponent>
                <div className="container">
                    <h1 className="text-center my-5">AlloSéries</h1>
                    <div className="row justify-content-center">
                        <div className="col-6 mr-5">
                            <EpisodeListComponent></EpisodeListComponent>
                        </div>
                        <div className="col-3">
                            <EpisodeFormComponent></EpisodeFormComponent>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EpisodesComponent;
