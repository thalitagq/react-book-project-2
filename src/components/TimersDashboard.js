import React from 'react'
import { EditableTimerList } from './EditableTimerList';
import { ToggleableTimerForm } from './ToggleableTimerForm';
import { v4 as uuid } from 'uuid';
import '../styles/TimerForm.css'
import helpers from '../helpers';


export class TimersDashboard extends React.Component {
  
  state = {
    timers: [
      {
        title: 'Practice squat',
        project: 'Gym Chores',
        id: uuid(),
        elapsed: 5456099,
        runningSince: Date.now(),
      },
      {
        title: 'Bake squash',
        project: 'Kitchen Chores',
        id: uuid(),
        elapsed: 1273998,
        runningSince: null,
      },
    ],
  };

  handleCreateFormSubmit = (timer) => {
    this.createTimer(timer);
  };

  createTimer = (timer) => {
    const t = helpers.newTimer(timer);
    this.setState({
      timers: this.state.timers.concat(t),
    });
  };
  
  render() {
    return (
      <div className="dashboard">
        <div className="header">
          <h1>Timers</h1>
        </div>
        <div className="dashboardCol">
          <EditableTimerList timers={this.state.timers}/>
        </div>
        <div className="dashboardCol">
          <ToggleableTimerForm 
            isOpen={true}
            onFormSubmit={this.handleCreateFormSubmit}
          />
        </div>
      </div>
    );
  }
}