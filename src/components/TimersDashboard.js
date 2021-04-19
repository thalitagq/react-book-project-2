import React from 'react'
import { Grid } from "@material-ui/core";
import { EditableTimerList } from './EditableTimerList';
import { ToggleableTimerForm } from './ToggleableTimerForm';
import '../styles/TimerForm.css'


export class TimersDashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <div className="dashboardCol">
          <EditableTimerList />
        </div>
        <div className="dashboardCol">
          <ToggleableTimerForm isOpen={true}/>
        </div>
      </div>
    );
  }
}