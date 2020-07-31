import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import icon from '../../../assets/feed/icon.svg'
import Axios from 'axios';
import {axiosWithAuth} from '../../authentication/axiosWithAuth';
import {decode} from 'jsonwebtoken';

export default function Comments(props) {

    const [isopen, setIsOpen] = useState(false);
    const [count, setCount] = useState();
    const [likes, setLikes] = useState();

    useEffect(() => {
        getCommentCount(props.data.this_entity_id)
        getLikes();
    }, [])

    const getCommentCount = async(entity_id) =>{
        Axios.get(`https://frozen-hamlet-18508.herokuapp.com/api/comments/number/${entity_id}`)
        .then(res =>{
            setCount(res.data.message[0].count);
        })
        .catch(err => {
            console.log(err);
        })
    }

    const createComment = () =>{
        props.setState({...props.state, showCreateComment: !props.state.showCreateComment, id: props.data.this_entity_id})
    }

    const getLikes = async() =>{
        axiosWithAuth().get(`api/likes/post/${props.obj.entity_id}`).then(res =>{
            console.log(res);
            setLikes(res.data.message);
        })
        .catch(err =>{
            console.log(err);
        })
    }

    const like = async() =>{
        console.log(likes);
        let isLiked = false;
        await likes.map(res =>{
            if(decode(localStorage.getItem('token')).id === res.id){
                isLiked = true;
            }
        })
        if(isLiked){
            axiosWithAuth().delete(`api/likes/${props.obj.entity_id}`)
            .then(response =>{
                getLikes();
            })
            .catch(err =>{
                console.log(err);
            })
        } else {
            axiosWithAuth().post(`api/likes/${props.obj.entity_id}`)
                .then(response =>{
                    getLikes();
                })
                .catch(err =>{
                    console.log(err);
                })
        }
    }
    
    return (
        <Comment> {console.log(props)}
            <div>
                <div onClick={() => setIsOpen(!isopen)}>
                    <Title>
                        <Ico src={icon} alt='icon' />
                        <Name>{props.data.user_id}</Name>
                    </Title>
                    <p>{props.data.comment_data}</p>
                </div>
                <button onClick={() => createComment()}> {`${count}`} Comment </button>
                <button onClick={() => like()}> {likes === undefined ? "" : likes.length} Like </button>
                <button> Share </button>
            </div>
            <div>
                {isopen ? props.data.comments.map(data =>(
                    <Comments state={props.state} setState={props.setState} 
                    showCreateComment={props.showCreateComment} key={data.this_entity_id} 
                    data={data} ref={props.id} obj={props.obj} />
                )) : null}
            </div>
        </Comment>
    )
}

const Comment = styled.div`
    padding-left: 1em;
    border-left: 1px solid black;
    margin-left: 10px;
`

const Ico = styled.img`
    width: 25px;
    height: 25px;
`

const Name = styled.h1`
    padding-left: .5em;
`

const Title = styled.div`
    display: flex;
    align-items:center;
`