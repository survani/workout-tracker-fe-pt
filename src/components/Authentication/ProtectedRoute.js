import React from './node_modules/react';
import {Route, Redirect} from './node_modules/react-router-dom';


const ProtectedRoute = ({component: Component, ...props}) => {
  
    return(
        <Route
            {...props}
            render={() => {
            if (localStorage.getItem('token')){
                return <Component/>;
            } else {
                return <Redirect to='/' />
            }
            }}
        />
    );
};

export default ProtectedRoute