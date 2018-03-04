import React from 'react';
import { Link } from "react-router-dom";
import CSSComponent from "./CSSComponent";
import EpisodeEditFormComponent from "./EpisodeEditFormComponent";

class EpisodeDetailComponent extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            id: props.match.params.id,
            episode: {}
        };
    }

    componentDidMount() {
        fetch(`/api/episodes/${this.state.id}`, {
            method: 'GET'
        }).then((response) => {
            if(response.status === 200) {
                return response.json();
            }
            if(response.status >= 400) {
                throw new Error("Error !");
            }
        }).then((episode) => {
            this.setState({ episode: episode });
        });
    }
    
    render() {
        return (
            <div>
                <CSSComponent></CSSComponent>
                <Link className="btn btn-primary" to={"/"}>Liste des épisodes</Link>
                <div className="container">
                    <h1 className="text-center my-5">AlloSéries</h1>
                    <h2 className="text-center mb-5">{this.state.episode.name}</h2>
                    <div className="row justify-content-center">
                        <div className="col-3 mr-5">
                            <ul className="list-group">
                                <li className="list-group-item active"><h3>Détails :</h3></li>
                                <li className="list-group-item"><span className="font-weight-bold">Série : </span>{this.state.episode.name}</li>
                                <li className="list-group-item"><span className="font-weight-bold">Episode : </span>{this.state.episode.code}</li>
                                <li className="list-group-item"><span className="font-weight-bold">Score : </span>{this.state.episode.score}</li>
                            </ul>
                        </div>
                        <div className="col-3">
                            <EpisodeEditFormComponent episodeId={this.state.id}></EpisodeEditFormComponent>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EpisodeDetailComponent;
