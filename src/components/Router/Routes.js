import React from 'react';
import { Route } from 'react-router-dom';

//components
import Onboarding from '../onboarding/Onboard';
import Dashboard from '../dashboard/Dashboard';
import Callback from '../Auth/Auth/Callback';
import Signup from '../Auth/Auth/Signup';
import Calendar from '../calendar/Calendar';

// protected comopnents will be used with PrivateRoute. You can look at what the code is doing later.
export default function Router(props) {
  return (
    <div>
      <Route exact path='/dashboard' component={Dashboard} />
      <Route exact path='/onboarding' component={Onboarding} />
      <Route exact path='/schedule' component={Calendar} />
      <Route exact path='/' component={Signup} />
      <Route exact path='/callback' component={Callback} />
    </div>
  );
}
