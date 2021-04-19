import { Fab, Icon } from '@material-ui/core';
import React from 'react'
import { TimerForm } from './TimerForm';

export class ToggleableTimerForm extends React.Component {
  render() {
    if (this.props.isOpen) {
      return (
        <TimerForm />
      );
    } else {
      return (
        <div style={{display: 'flex', justifyContent:'center'}}>
          <Fab color="primary" aria-label="add" style={{ backgroundColor: "#8BB327"}}>
            <Icon>add</Icon>
          </Fab>
        </div>
      );
    }  
  }
}