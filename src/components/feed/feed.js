import React, { Component } from 'react'
import Axios from 'axios';
import styled from "styled-components";
import MainContainer from './feedcomponents/MainContainer';
import CreateComment from './CreateComment';

export default class feed extends Component {
    constructor(props){
        super(props);

        this.state = {
            feed: [],
            showCreateComment: false,
            id: 0
        }

        this.entity_id = React.createRef();
    }

    getFeed(){
        if(localStorage.getItem('token') !== undefined){
            Axios.get('https://frozen-hamlet-18508.herokuapp.com/api/feed') //eventually change this to followers driven feed
                .then(res =>{
                    this.setState({ ...this.state, feed: res.data.message})
                })
                .catch(err =>{
                    console.log(err);
                })
        } else {
            Axios.get('https://frozen-hamlet-18508.herokuapp.com/api/feed')
                .then(res =>{
                    this.setState({...this.state, feed: res.data.message})
                })
                .catch(err =>{
                    console.log(err);
                })
        }
    }

    produceFeed(){
        let buffer = [];
        this.state.feed.forEach(obj =>{
            buffer.push(<MainContainer obj={obj} state={this.state} setState={this.setState.bind(this)} id={this.entity_id} />)
        })
        return buffer;
    }

    componentDidMount(){
        this.getFeed();
    }
    
    render() {
        return (
            <>
                {this.state.showCreateComment ? <CreateComment state={this.state} setState={this.setState.bind(this)} id={this.state.id} /> : null }
                <FeedBox>
                    {this.produceFeed()}
                </FeedBox>
            </>
        )
    }
}

const FeedBox = styled.div`
    display: flex;
    flex-wrap:wrap;
    justify-content: space-around;
    width: 50%;
    margin: 0 auto;
`
