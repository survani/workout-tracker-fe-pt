import React from 'react';

class NavItem extends React.Component {
    constructor() {
        super();
    }

    render() {

        const selected = {
            backgroundColor: "blue"
        }

        const notSelected = {
            backgroundColor: "white"
        }

        return (
            <p id={this.props.id} onClick={this.props.SelectItem} style={this.props.selected ? selected : notSelected}>{this.props.text}</p>
        );
    }

}

export default NavItem;