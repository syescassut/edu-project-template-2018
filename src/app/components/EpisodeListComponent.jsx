import React from 'react';  
import EpisodeItemComponent from "./EpisodeItemComponent";

class EpisodeListComponent extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { episodes: [] };
    }
    
    componentDidMount() {
        fetch("/api/episodes/", {method: 'GET'})
            .then((response) => {
                return response.json();
            }).then(episodes => {
               this.setState({ episodes:  episodes});
            })
    }
    
    render() {
        const elements = this.state.episodes.map(function(episode) {
            return <EpisodeItemComponent key={episode.id} episode={episode} />
        });
        return (
            <table>
                <tbody>
                    <tr><th>Serie</th><th>Episode</th><th>Score</th></tr>
                    { elements }
                </tbody>
            </table>
        );
    }
}

export default EpisodeListComponent;
