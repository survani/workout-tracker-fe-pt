import React from 'react';
import NavItem from './NavItem';

class NavigationPopOut extends React.Component {
    constructor() {
        super();

        this.state = {
            selectedItems: {
                0:false,
                1:false,
                2:false,
                3:false,
                4:false,
                5:false,
                6:false
            }
          }
    }

    SelectItem = (event) => {

        var selectedItems = {
            0:false,
            1:false,
            2:false,
            3:false,
            4:false,
            5:false,
            6:false
        }

        selectedItems[event.target.id] = true;

        this.setState({
            selectedItems: selectedItems
          })
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
                <NavItem id="0" text="Weekly Schedule" SelectItem = {this.SelectItem} selected={this.state.selectedItems[0]}/>
                <NavItem id="1" text="Dashboard" SelectItem = {this.SelectItem} selected={this.state.selectedItems[1]}/>
                <NavItem id="2" text="See Current Progress" SelectItem = {this.SelectItem} selected={this.state.selectedItems[2]}/>
                <NavItem id="3" text="Share Your Progress" SelectItem = {this.SelectItem} selected={this.state.selectedItems[3]}/>
                <NavItem id="4" text="See Workout Library" SelectItem = {this.SelectItem} selected={this.state.selectedItems[4]}/>
                <NavItem id="5" text="Settings" SelectItem = {this.SelectItem} selected={this.state.selectedItems[5]}/>
                <NavItem id="6" text="Logout" SelectItem = {this.SelectItem} selected={this.state.selectedItems[6]}/>
            </div>
        );
    }

}

export default NavigationPopOut;
