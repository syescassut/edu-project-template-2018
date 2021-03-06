import React from 'react';

class ButtonFormComponent extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    addEpisode() {
        fetch("/api/episodes", {
            method: "POST",
            headers: {
                'Accept': "application/json",
                'Content-Type': "application/json"
            },
            body: JSON.stringify(
                this.props.episode
            )
        }).then((response) => {
            if(response.status === 201) { 
                window.location.reload(); 
            }
            if(response.status >= 400) {
                throw new Error("Error !");
            }
        });
    }
    
    render() {
        return (
            <button onClick={() => this.addEpisode()} className="btn btn-primary">Ajouter</button>
        );
    }
}

export default ButtonFormComponent;
