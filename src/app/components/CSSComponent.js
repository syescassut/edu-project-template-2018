import React from 'react';  

class CSSComponent extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <link type="text/css" rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"/>
            </div>
        );
    }
}

export default CSSComponent;
