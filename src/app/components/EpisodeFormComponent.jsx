import React from 'react';
import ButtonFormComponent from "./ButtonFormComponent";

class EpisodeFormComponent extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            code: "",
            score: 0
        };
    }
    
    render() {
        return (
            <form method="post">
                <div className="form-group">
                    <label htmlFor="name">Série :</label>
                    <input onChange={(event) => this.setState({name: event.target.value})} className="form-control" type="text" name="name" id="name" placeholder="Nom de la série"/>
                </div>
                <div className="form-group">
                    <label htmlFor="code">Episode :</label>
                    <input onChange={(event) => this.setState({code: event.target.value})} className="form-control" type="text" name="code" id="code" placeholder="Code de l'épisode (Ex : S01E01)"/>
                </div>
                <div className="form-group">
                    <label htmlFor="score">Score :</label>
                    <input onChange={(event) => this.setState({score: event.target.value})} className="form-control" type="number" name="score" id="score" placeholder="Note de l'épisode"/>
                </div>
                <ButtonFormComponent episode={this.state}></ButtonFormComponent>
            </form>
        );
    }
}

export default EpisodeFormComponent;