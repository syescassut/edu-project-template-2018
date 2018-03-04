import React from 'react';

class ButtonEditFormComponent extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    editEpisode() {
        fetch(`/api/episodes/${this.props.episodeId}`, {
            method: "PUT",
            headers: {
                'Accept': "application/json",
                'Content-Type': "application/json"
            },
            body: JSON.stringify(
                this.props.episode
            )
        }).then((response) => {
            if(response.status === 200) { 
                window.location.reload(); 
            }
            if(response.status >= 400) {
                throw new Error("Error !");
            }
        });
    }
    
    render() {
        return (
            <button onClick={() => this.editEpisode()} className="btn btn-primary">Editer</button>
        );
    }
}

export default ButtonEditFormComponent;



