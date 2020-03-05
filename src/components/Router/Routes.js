import React from 'react';
import { Route } from 'react-router-dom';

//components
import Onboarding from '../onboarding/Onboard';
import Dashboard from '../dashboard/Dashboard';


// protected comopnents will be used with PrivateRoute. You can look at what the code is doing later.
export default function Router(props) {
  return (
    <div>
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/onboarding" component={Onboarding} />
    </div>
  )
}