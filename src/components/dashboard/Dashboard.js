import React from "react";
import Scheduler from "./Scheduler";
import Progress from "./Progress";
import { useHistory } from "react-router-dom";

const Dashboard = () => {
  const history = useHistory();

  return (
    <div>
      <div className="dashboard_main">
        <h1 className="dashboard_header">Dashboard</h1>
      </div>
      <div>
        <button
          type="submit"
          className="dashboard_btn"
          onClick={() => history.push("/createworkout")}
        >
          Create a workout plan
        </button>
        <button
          type="submit"
          className="dashboard_btn"
          onClick={() => history.push("/")}
        >
          Find a workout plan
        </button>
      </div>
      <div>
        <button
          type="submit"
          className="dashboard_btn"
          onClick={() => history.push("/")}
        >
          Create a meal plan
        </button>
        <button
          type="submit"
          className="dashboard_btn"
          onClick={() => history.push("/")}
        >
          Find a meal plan
        </button>
      </div>
      <div>
        <button
          type="submit"
          className="dashboard_btn"
          onClick={() => history.push("/")}
        >
          Create your Profile
        </button>
        <button
          type="submit"
          className="dashboard_btn"
          onClick={() => history.push("/")}
        >
          Change settings
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
