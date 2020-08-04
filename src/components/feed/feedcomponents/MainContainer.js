/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import Comments from './Comments';
import { getComments } from './getComments';
import Workout from './workout';
import Routine from './routine';
import Diet from './diet';
import Mealplan from './mealplan';
import CommentHead from './CommentHead';
import Axios from 'axios';
import icon from '../../../assets/feed/icon.svg'
import { axiosWithAuth } from '../../authentication/axiosWithAuth';
import {decode} from 'jsonwebtoken'
import {Ico, Name, Container, Title} from '../style';


const types = {
    WORKOUT: 1,
    ROUTINE: 2,
    DIET: 3,
    MEALPLAN: 4,
    COMMENT: 5
}

export default function MainContainer(props) {

    const [commentData, setComments] = useState();
    const [showComments, setShowComments] = useState(false);
    const [onlyOnce, setOnlyOnce] = useState(false);
    const [count, setCount] = useState();
    const [likes, setLikes] = useState();

    useEffect(() => {
        getCommentCount(props.obj.entity_id)
        getLikes();
    }, [])

    const sort = (obj) =>{
        switch(obj.type){
            case types.WORKOUT:
                return (<Workout key={obj.entity_id} data={obj}/>)
            case types.ROUTINE:
                return (<Routine key={obj.entity_id} data={obj} />)
            case types.DIET:
                return(<Diet key={obj.entity_id} data={obj} />)
            case types.MEALPLAN:
                return(<Mealplan key={obj.entity_id} data={obj} />)
            case types.COMMENT:
                return(<CommentHead key={obj.entity_id} data={obj} />)
            default:
                    console.log('problem with the displaying feeds')
                break;
        }
    }

    const doComments = async() =>{
        if(onlyOnce !== true){
            setComments(await getComments(props.obj.entity_id))
            setShowComments(!showComments);
            setOnlyOnce(true);
        }
        else {
            setShowComments(!showComments);
        }
    }

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
        props.setState({...props.state, showCreateComment: !props.state.showCreateComment, id: props.obj.entity_id})
    }

    const getLikes = async() =>{
        axiosWithAuth().get(`api/likes/post/${props.obj.entity_id}`).then(res =>{
            setLikes(res.data.message);
        })
        .catch(err =>{
            console.log(err);
        })
    }

    const like = async() =>{
        console.log(likes);
        let isLiked = false;
        // eslint-disable-next-line array-callback-return
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
        <Container>
            <div>
                <div onClick={() => doComments()}>
                    <Title>
                        <Ico src={icon} alt='icon' />
                        <Name>{props.obj.user.username}</Name>
                    </Title>
                    <div>
                        {sort(props.obj)}
                    </div>
                </div>
                <button onClick={() => createComment()}> {`${count}`} Comment </button>
                <button onClick={() => like()}> {likes === undefined ? "" : likes.length} Likes </button>
                <button> Share </button>
            </div>
            <div>
                {showComments ? commentData.data.message[0].comments.map(data =>(
                    <Comments state={props.state} setState={props.setState} 
                        showCreateComment={props.showCreateComment} key={data.this_entity_id} 
                        data={data} ref={props.id} obj={props.obj}
                        />
                )) : null }
            </div>
        </Container>
    )
}
