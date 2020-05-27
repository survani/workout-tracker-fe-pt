import React from 'react';
import Scheduler from './Scheduler';
import Progress from './Progress';
import { useHistory } from "react-router-dom";


const Dashboard = () => {
  const history = useHistory();

  return (
    <div>
      <div className="dashboard_main"><h1 className="dashboard_header">Dashboard</h1></div>
      <div>
      <button type='submit' className="dashboard_btn" onClick={() => history.push("/")}>
        Create a custom workout plan
      </button>
      <button type='submit' className="dashboard_btn" onClick={() => history.push("/")}>
        Find a prefab workout plan
      </button>
      </div>
      <div>
      <button type='submit' className="dashboard_btn" onClick={() => history.push("/")}>
        Create custom meal plan
      </button>
      <button type='submit' className="dashboard_btn" onClick={() => history.push("/")}>
        Find a prefab meal plan
      </button>
      </div>
      <div>
      <button type='submit' className="dashboard_btn" onClick={() => history.push("/")}>
        Create your Profile
      </button>
      <button type='submit' className="dashboard_btn" onClick={() => history.push("/")}>
        Change settings
      </button>
      </div>
    </div>
  );
};

export default Dashboard;
