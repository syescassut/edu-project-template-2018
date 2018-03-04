import React from 'react';  
import EpisodeItemComponent from "./EpisodeItemComponent";

class EpisodeListComponent extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { episodes: [] };
    }
    
    componentDidMount() {
        fetch("/api/episodes/", { 
            method: 'GET'
        }).then((response) => {
            if(response.status === 200) { 
                return response.json();
            }
            if(response.status >= 400) {
                throw new Error("Error !");
            }
        }).then(episodes => {
            this.setState({ episodes:  episodes});
        });
    }
    
    render() {
        const elements = this.state.episodes.map(function(episode) {
            return <EpisodeItemComponent key={episode.id} episode={episode} />
        });
        return (
            <table className="table">
                <tbody>
                    <tr className="table-active">
                        <th scope="col">Série</th>
                        <th scope="col">Episode</th>
                        <th scope="col">Score</th>
                        <th scope="col"></th>
                    </tr>
                    { elements }
                </tbody>
            </table>
        );
    }
}

export default EpisodeListComponent;
