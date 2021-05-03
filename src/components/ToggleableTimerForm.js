import { Fab, Icon } from '@material-ui/core';
import React from 'react'
import { TimerForm } from './TimerForm';

export class ToggleableTimerForm extends React.Component {

  state = {
    isOpen: false,
  };

  handleFormOpen = () => {
    this.setState({ isOpen: true });
  };

  handleFormClose = () => {
    this.setState({ isOpen: false });
  };

  handleFormSubmit = (timer) => {
    this.props.onFormSubmit(timer);
    this.setState({ isOpen: false });
  };

  render() {
    if (this.state.isOpen) {
      return (
        <TimerForm 
          onFormSubmit={this.handleFormSubmit}
          onFormClose={this.handleFormClose}
        />
      );
    } else {
      return (
        <div style={{display: 'flex', justifyContent:'center'}}>
          <Fab 
            color="primary" 
            aria-label="add" 
            style={{ backgroundColor: "#8BB327"}} 
            onClick={this.handleFormOpen}
          >
            <Icon>add</Icon>
          </Fab>
        </div>
      );
    }  
  }
}