import React, {useState} from 'react';

const initialUser = {
    date: "",
    location: "",
    measurements: "",
    weight: "",
    height: "",
    goals: "",
    bio: ""
}

const initialUserPost = [
    {
    id: 1,
    date: "May 1, 2020",
    location: "Santa Cruz",
    measurements: " 30 45 55",
    weight: "110",
    height: "5'1",
    goals: "Lose 5 lbs",
    bio: "Love to work out"
    }
]

export default function Profile () {
    const [user, setUser] = useState(initialUser);
    const [userPost, setUserPost] = useState(initialUserPost);

    const onInputChange = evt => {
        const {name} = evt.target;
        const {value} = evt.target;

        setUser({...user, [name]: value})
    }

    return(
        <form>
            <label>Username</label>
            <imput
            />
        </form>

    )
}