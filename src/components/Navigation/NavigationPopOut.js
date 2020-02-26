import React from 'react';

class NavigationPopOut extends React.Component {
    constructor() {
        super();
    }

    render() {

        const visible = {
            height: "100vh",
            width: "50%",
            maxWidth: "200px",
            position: "fixed",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white"
        }

        const invisible = {
            height: "100vh",
            width: "50%",
            maxWidth: "200px",
            position: "fixed",
            display: "none",
            flexDirection: "column",
            backgroundColor: "white"
        }
        return (
            <div style={this.props.active ? visible : invisible} class="NavigationPopOut">
                <p>Weekly Schedule</p>
                <hr></hr>
                <p>Dashboard</p>
                <p>See Current Progress</p>
                <p>Share Current Progress</p>
                <p>See Workout Library</p>
            </div>
        );
    }

}

export default NavigationPopOut;
