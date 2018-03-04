import React from 'react';
import { Link } from "react-router-dom";

class EpisodeItemComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { episode: props.episode };
    }
    
    deleteEpisode() {
        fetch(`/api/episodes/${this.state.episode.id}`, {
            method: 'DELETE'
        }).then((response) => {
            if(response.status === 204) { 
                window.location.reload(); 
            }
            if (response.status >= 400) {
                throw new Error("Error !");
            }
        }); 
    }
    
    render() {
        return (
            <tr>
                <td>{this.state.episode.name}</td>
                <td>{this.state.episode.code}</td>
                <td>{this.state.episode.score}</td>
                <td>
                    <div className="btn-group">
                        <Link className="btn btn-outline-success" to={`/${this.state.episode.id}`}>Editer</Link>
                        <button onClick={() => this.deleteEpisode()} className="btn btn-outline-danger">Supprimer</button>
                    </div>            
                </td>
            </tr>
        );
    }
}

export default EpisodeItemComponent;