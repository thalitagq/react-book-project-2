import React from 'react'
import { Timer } from './Timer';
import { TimerForm } from './TimerForm';

export class EditableTimer extends React.Component{

  state = {
    editFormOpen: false,
  };

  handleEditClick = () => {
    this.openForm();
  };

  handleFormClose = () => {
    this.closeForm();
  };

  handleSubmit = (timer) => {
    this.props.onFormSubmit(timer);
    this.closeForm();
  };

  closeForm = () => {
    this.setState({
      editFormOpen: false
    });
  };

  openForm = () => {
    this.setState({
      editFormOpen: true
    });
  };


  render(){
    if (this.state.editFormOpen) {
      return (
        <TimerForm
          title={this.props.title}
          project={this.props.project}
          onFormSubmit={this.handleSubmit}
          onFormClose={this.handleFormClose}
        />
      );
    } else {
      return (
        <Timer
          title={this.props.title}
          project={this.props.project}
          elapsed={this.props.elapsed}
          runningSince={this.props.runningSince}
          onEditClick={this.handleEditClick}
        />
      );
    }  
  }
}