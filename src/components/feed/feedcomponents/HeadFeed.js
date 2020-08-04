import React, { Component } from 'react'
import {axiosWithAuth} from '../../authentication/axiosWithAuth'
import MainContainer from '../feedcomponents/MainContainer';
import CreateComment from '../CreateComment';
import NavigationBar from '../../navigationbar/navigationbar';
import {FeedBox, Wrapper} from '../style';

export default class HeadFeed extends Component {
    constructor(props){
        super(props);

        this.state = {
            feed: [],
            showCreateComment: false,
            id: 0,
            data: ''
        }

        this.entity_id = React.createRef();
    }

    getFeed(){
        axiosWithAuth().get(`/api/comments/get/${this.props.match.params.id}`)
        .then(res =>{
            this.setState({...this.state, feed: res.data.message})
            this.getHeadData();
        })
        .catch(err =>{
            console.log(err);
        })
    }

    getHeadData(){
        axiosWithAuth().get(`/api/feed/entity/${this.state.feed[0].this_entity_id}`).then(res =>{
            this.setState({...this.state, data: res.data.message});
        })
        .catch(err =>{
            console.log(err);
        })
    }

    produceFeed(){
        let buffer = [];
        this.state.feed.forEach(obj =>{
            obj.entity_id = this.state.feed[0].id;
            obj = {...obj, ...this.state.data};
            buffer.push(<MainContainer obj={obj} state={this.state} setState={this.setState.bind(this)} id={this.entity_id} />)
        })
        return buffer;
    }

    componentDidMount(){
        this.getFeed();
    }
    
    render() {
        return (
            <Wrapper>  
                <NavigationBar />
                {this.state.showCreateComment ? <CreateComment state={this.state} setState={this.setState.bind(this)} id={this.state.data.entity_id} /> : null }
                <FeedBox>
                    {this.state.feed.length !== 0 ? this.produceFeed() : ''}
                </FeedBox>
            </Wrapper>
        )
    }
}
