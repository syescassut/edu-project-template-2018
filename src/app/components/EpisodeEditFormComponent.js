import React from 'react';
import ButtonEditFormComponent from "./ButtonEditFormComponent";

class EpisodeEditFormComponent extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            id: props.episodeId,
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
    
    setName(event) {
        var newEpisode = {
            id: this.state.id,
            name: event.target.value,
            code: this.state.episode.code,
            score: this.state.episode.score
        };
        this.setState({episode: newEpisode});
    }
    
    setCode(event) {
        var newEpisode = {
            id: this.state.id,
            name: this.state.episode.name,
            code: event.target.value,
            score: this.state.episode.score
        };
        this.setState({episode: newEpisode});
    }
    
    setScore(event) {
        var newEpisode = {
            id: this.state.id,
            name: this.state.episode.name,
            code: this.state.episode.code,
            score: event.target.value
        };
        this.setState({episode: newEpisode});
    }
    
    render() {
        return (
            <form method="put">
                <div className="form-group">
                    <label htmlFor="name">Série :</label>
                    <input value={this.state.episode.name} onChange={(event) => this.setName(event)} className="form-control" type="text" name="name" id="name" placeholder="Nom de la série"/>
                </div>
                <div className="form-group">
                    <label htmlFor="code">Episode :</label>
                    <input value={this.state.episode.code} onChange={(event) => this.setCode(event)} className="form-control" type="text" name="code" id="code" placeholder="Code de l'épisode (Ex : S01E01)"/>
                </div>
                <div className="form-group">
                    <label htmlFor="score">Score :</label>
                    <input value={this.state.episode.score} onChange={(event) => this.setScore(event)} className="form-control" type="number" name="score" id="score" placeholder="Note de l'épisode"/>
                </div>
                <ButtonEditFormComponent episodeId={this.state.id} episode={this.state.episode}></ButtonEditFormComponent>
            </form>
        );
    }
}

export default EpisodeEditFormComponent;