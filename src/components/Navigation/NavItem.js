import React from 'react';
import { withRouter } from 'react-router-dom';

class NavItem extends React.Component {
    constructor() {
        super();
    }

    itemSelected(e){
        this.props.selectItem(e);
        this.props.history.push(this.props.destination);
    }
    

    render() {
        const selected = {
            backgroundColor: "blue"
        }

        const notSelected = {
            backgroundColor: "white"
        }

        return (
            <p id={this.props.id} onClick={this.itemSelected.bind(this)} destination={this.props.destination} style={this.props.selected ? selected : notSelected}>{this.props.text}</p>
        );
    }

}

export default withRouter(NavItem);