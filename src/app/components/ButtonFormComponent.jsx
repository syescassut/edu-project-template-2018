import React from 'react';

class ButtonFormComponent extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { name: props.name, code: props.code, score: props.score };
    }
    
    render() {
        return (
                <button onClick={() => fetch("/api/episodes/", {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(this.state)
                  }).then((response) => {
                        if(response.status == 201) { window.location.reload(); }
                  }) 
                }>Add Episode</button>
        );
    }
}

export default ButtonFormComponent;
