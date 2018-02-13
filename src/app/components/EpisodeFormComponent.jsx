import React from 'react';
import ButtonFormComponent from "./ButtonFormComponent";

class EpisodeFormComponent extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { name: "", code: "", score: "" };
    }
    
    render() {
        return (
            <form method="post">
                <label htmlFor="name">Série :</label><br></br>
                <input type="text" name="name" id="name" value={this.state.name} onChange={(value)=>this.setState({name: value})}/><br></br>
                <label htmlFor="code">Episode :</label><br></br>
                <input type="text" name="code" id="code" value={this.state.code}/><br></br>
                <label htmlFor="score">Score :</label><br></br>
                <input type="text" name="score" id="score" value={this.state.score}/><br></br>
                <ButtonFormComponent name={this.state.name} code={this.state.code} score={this.state.score}></ButtonFormComponent>
            </form>
        );
    }
}

export default EpisodeFormComponent;