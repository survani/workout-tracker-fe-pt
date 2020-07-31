import React, {useState} from 'react';
import styled from 'styled-components';
import {axiosWithAuth} from '../authentication/axiosWithAuth';

export default function CreateComment(props) {

    const [visible, setVisible] = useState(true);
    const [text, setText] = useState('')

    const removeComment = () => {
        props.setState({...props.state, showCreateComment: !props.state.showCreateComment})
    }

    const changeVisible = () =>{
        setVisible(false);
    }

    const setValue = (e) =>{
        setText(e.target.innerText);
    }

    const submitComment = () =>{
        axiosWithAuth()
        .post(`api/comments/${props.id}`, {
            comment_data: text
        })
        .then(res =>{
            console.log('success:' + res);
            removeComment();
            window.location.reload(false);
        })
        .catch(err =>{
            console.log(err);
        })
    }

    return (
        <>{console.log(props)}
        <Background> </Background>
        <CommentForm>
            <Middle>
                <Top>
                     <Svg width='50' height='50' onClick={() => removeComment()} >
                         <g>
                         <path d="M13.414 12l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 6.207 4.793c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L10.586 12l-5.793 5.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z"></path>
                         </g>
                     </Svg>
                </Top>
                <Input>
                    <TextArea style={!visible ? {opacity: 1} : {} } onInput={(e) => setValue(e)} onClick={() => changeVisible()} contentEditable="true" >
                        {visible ? 'Write your comment...' : ''}
                    </TextArea>
                </Input>
                <Bottom>
                    <Submit onClick={() => submitComment()}> Submit </Submit>
                </Bottom>
            </Middle>
        </CommentForm>
        </>
    )
}

const CommentForm = styled.div`
    position: fixed;
    z-index: 2;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
`

const Svg = styled.svg`
    fill: rgb(29, 161, 242);
    cursor: pointer;
`

const Background = styled.div`
    position: fixed;
    z-index: 2;
    height: 100vh;
    width: 100%;
    opacity: .7;
    background-color: gray;
    border-bottom: 2px solid gray;
    background-color: rgb(21, 32, 43);
`

const ThierComment = styled.div`
    width: 100%;
    
`

const Top = styled.div`
    width: 100%;
    height: 2em;
    border-bottom: 2px solid gray;
    background-color: rgb(21, 32, 43);
    display: flex; 
    line-height: 2em;
`

const Bottom = styled.div`
    width: 100%;
    height: 3em;
    border-top: 2px solid gray;
    background-color: rgb(21, 32, 43);
    display: flex; 
    color: white;
    justify-content: flex-end;
    line-height: 2.5em;
    align-items: center;
`

const Submit = styled.div`
    padding: 0 .5em;
    margin-right: 1em;
    background-color: rgb(29, 161, 242);
    border-radius: 10px;
    height: 90%;
    cursor: pointer;
`

const Middle = styled.div`
    display: flex;
    width: 50%;
    justify-content: center;
    flex-direction: column;
`

const Input = styled.div`
    width: 100%;
    height: 20em;
    background-color: rgb(21, 32, 43);
    padding-top: 5%;
`

const TextArea = styled.div`
    margin-left: 8%;
    width: 90%;
    height: 100%;
    color: white;
    background-color: rgb(21, 32, 43);
    word-wrap: break-word;
    overflow-wrap: break-word;
    line-height: 20px;
    white-space: normal;
    opacity: .7;
`



