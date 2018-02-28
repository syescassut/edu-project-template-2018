import React from 'react';
import ButtonFormComponent from "./ButtonFormComponent";

class EpisodeFormComponent extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { name: "", code: "", score: 0 };
    }
    
    render() {
        return (
            <form method="post">
                <label htmlFor="name">Série :</label><br></br>
                <input type="text" name="name" id="name" onChange={(value)=>this.setState({name: value})}/><br></br>
                <label htmlFor="code">Episode :</label><br></br>
                <input type="text" name="code" id="code" onChange={(value)=>this.setState({code: value})}/><br></br>
                <label htmlFor="score">Score :</label><br></br>
                <input type="number" name="score" id="score" onChange={(value)=>this.setState({score: value})}/><br></br>
                <ButtonFormComponent name={this.state.name} code={this.state.code} score={this.state.score}></ButtonFormComponent>
            </form>
        );
    }
}

export default EpisodeFormComponent;