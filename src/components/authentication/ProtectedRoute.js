import React from './node_modules/react';
import {Route, Redirect} from './node_modules/react-router-dom';


const ProtectedRoute = ({component: Component, ...props}) => {
  
    return(
        <Route
            {...props}
            render={ props => {
            if (localStorage.getItem('token')){
                return <Component {...props}/>;
            } else {
                return <Redirect to='/login' />
            }
            }}
        />
    );
};

export default ProtectedRoute;