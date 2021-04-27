import React from 'react'
import { Timer } from './Timer';
import { TimerForm } from './TimerForm';

export class EditableTimer extends React.Component{

  state = {
    editFormOpen: false,
  };

  render(){
    if (this.state.editFormOpen) {
      return (
        <TimerForm
          title={this.props.title}
          project={this.props.project}
        />
      );
    } else {
      return (
        <Timer
          title={this.props.title}
          project={this.props.project}
          elapsed={this.props.elapsed}
          runningSince={this.props.runningSince}
        />
      );
    }  
  }
}