import React, { Component } from 'react'
import { axiosWithAuth } from '../../authentication/axiosWithAuth';
import {MainContent, CardContent, CardBody, CardTitle, CardDescription, WorkoutLength} from '../workouts/style';
import NavigationBar from '../../navigationbar/navigationbar';
import styled from 'styled-components';

export default class ViewRoutines extends Component {
    constructor(props){
        super(props);

        this.state = {
            routines: [],
            edit: false,
            editRoutine: {}
        }
    }

    componentDidMount(){
        this.getRoutines();
    }

    getRoutines(){
        axiosWithAuth().get('/api/routines')
        .then(res =>{
            console.log(res);
            this.setState({...this.state, routines: Object.values(res.data.message)})
        })
        .catch(err =>{
            console.log(err);
        })
    }

    handleEdit(data){
        this.setState({...this.state, edit: true, editRoutine: data});
    }

    removeWorkout(data){
        axiosWithAuth().post(`api/routines/workout/${this.state.editRoutine.id}`, 
        {
            workout_id: data.id
        })
        .then(res =>{
            console.log(res);
            this.getRoutines();
            this.setState({...this.state, edit: false, editRoutine: {}})

        })
        .catch(err =>{
            console.log(err);
        })
    }

    exitEdit(){
        this.setState({...this.state, edit: false, editRoutine: {}});
    }

    deleteRoutine(){
        axiosWithAuth().delete(`api/routines/${this.state.editRoutine.id}`)
        .then(res =>{
            this.getRoutines();
            this.setState({...this.state, edit: false, editRoutine: {}})
        })
        .catch(err =>{
            console.log(err);
        })
    }

    showEdit(){
        return (
            <>
            <Background />
            <Change>
                <div style={{display: 'flex', width: '100%', justifyContent: 'center', flexWrap: 'wrap'}}>
                    <span style={{textAlign: 'center', width: '100%'}}></span>
                        <MainContent>
                            <CardContent style={{ backgroundColor: 'white', justifyContent: 'center'}}>
                            <Edit onClick={() => this.exitEdit()} style={{marginRight: '90%'}}> X </Edit>
                            <span style={{textAlign: 'center', width: '100%'}}><h1>{this.state.editRoutine.routine_title} </h1> </span>
                                {this.state.editRoutine.workout.map(res =>(
                                    <CardBody style={{margin: '0 auto'}} key="id">
                                        <CardTitle>
                                            {res.workout_title}
                                        </CardTitle>
                                        <CardDescription>
                                            <p>{res.workout_description}</p>
                                            <WorkoutLength> 
                                                {res.workout_length}
                                            </WorkoutLength>
                                        </CardDescription>
                                        <Edit onClick={() => this.removeWorkout(res)}> Remove </Edit>
                                    </CardBody>
                                ))}
                                <hr style={{width: '100%', visibility: 'hidden' }} />
                                <Edit onClick={() => this.deleteRoutine()}> Delete Routine </Edit>
                            </CardContent>
                    </MainContent>
                </div>
            </Change>
            </>
        )
    }

    render() {
        return (
            <div>
                <NavigationBar />
                <div style={{paddingTop: '1em', display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                    {this.state.routines.map(data =>(
                        <div style={{display: 'flex', width: '100%', justifyContent: 'center', flexWrap: 'wrap'}}>
                            <span style={{textAlign: 'center', width: '100%'}}><h1>{data.routine_title} </h1></span>
                            <MainContent>
                                <CardContent style={{justifyContent: 'center'}}>
                                    {data.workout.map(res =>(
                                            <CardBody key="id">
                                                <CardTitle>
                                                    {res.workout_title}
                                                </CardTitle>
                                                <CardDescription>
                                                    <p>{res.workout_description}</p>
                                                    <WorkoutLength> 
                                                        {res.workout_length}
                                                    </WorkoutLength>
                                                </CardDescription>
                                            </CardBody>
                                            ))}
                                </CardContent>
                                <Edit onClick={() => this.handleEdit(data)}> Edit </Edit>
                            </MainContent>
                        </div>
                    ))} 
                </div>
                {this.state.edit ? this.showEdit(): null}
            </div>
        )
    }
}


const Edit = styled.button`
    display: block;
    border-radius: 30px;
    padding: 0 2em;
    background-color: #1d2026;
    margin: 0 auto;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #f6f6f6;
    cursor: pointer;
    margin-bottom: 1em;
    :hover {
        background-color: white;
        color: black;
    }
`

const Background = styled.div`
    position: fixed;
    z-index: 2;
    background-color: gray;
    width: 100%;
    height: 100vh;
    top: 0;
    opacity: .7;
`
const Change = styled.div`
    display: flex;
    position: fixed;
    z-index: 3;
    width: 100%;
    height: 100vh;
    top: 0;
`