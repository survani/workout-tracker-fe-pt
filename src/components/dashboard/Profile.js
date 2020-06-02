import React, {useState, useEffect} from 'react';
import axios from 'axios';

const initialUserInfo = {
    image: "",
    location: "",
    bio: ""
}

export default function Profile () {

    const [userInfo, setUserInfo] = useState(initialUserInfo);

    const getUserInfo = () => {
        axios.get('')
        .then(res => {
            setUserInfo(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    }

    const postUserInfo = user => {
        axios.post('', user)
        .then(res => {
            setUserInfo(res.data, ...userInfo)
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => {
            setUserInfo(initialUserInfo);
        })
    }

    const handleChanges = evt => {
        const {name} = evt.target
        const {value} = evt.target
        
        setUserInfo({
            ...userInfo,
            [name]: value
        })
    }

    const onSubmit = evt => {
        evt.preventDefault()

        const user = {
        image: userInfo.image.trim(),
        location: userInfo.location.trim(),
        bio: userInfo.bio.trim(),

        }
        postUserInfo(user);
    }

    useEffect(() => {
        getUserInfo()
    }, [])


    return(
        <form className='form-container' onSubmit={onSubmit}>
            <label>Profile Picture</label>
            <imput
            type='text'
            name='image'
            onChange={handleChanges}
            value={userInfo.image}
            />
            <label>Location</label>
            <imput
            type='text'
            name='location'
            onChange={handleChanges}
            value={userInfo.location}
            />
            <label>Bio</label>
            <imput
            type='text'
            name='bio'
            onChange={handleChanges}
            value={userInfo.bio}
            />
            <button>Post</button>
        </form>

    )
}