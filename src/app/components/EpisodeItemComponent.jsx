import React from 'react';

class EpisodeItemComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { episode: props.episode };
    }
    
    render() {
        return (
            <tr>
                <td>{this.state.episode.name}</td>
                <td>{this.state.episode.code}</td>
                <td>{this.state.episode.score}</td>
                <td><button>Delete</button></td>
            </tr>
        );
    }
}

export default EpisodeItemComponent;