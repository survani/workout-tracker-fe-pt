import React from "react";
import Scheduler from "./Scheduler";
import Progress from "./Progress";
import { useHistory } from "react-router-dom";

const Dashboard = () => {
  const history = useHistory();

  return (
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
  );
};

export default Dashboard;
