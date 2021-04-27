import { Button, ButtonGroup, Card, FormControl, TextField } from '@material-ui/core';
import React from 'react'
import '../styles/TimerForm.css'

export class TimerForm extends React.Component {

  state = {
    title: this.props.title || '',
    project: this.props.project || '',
  };

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };
  
  handleProjectChange = (e) => {
    this.setState({ project: e.target.value });
  };

  render() {
    const submitText = this.props.title ? 'Update' : 'Create';
    return (
      <Card className='card'>
        <FormControl fullWidth variant="outlined" style={{margin:"10px 0 20px"}}>
          <TextField 
            label="Title" 
            variant="outlined" 
            className='inputField' 
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
        </FormControl>
        <FormControl fullWidth variant="outlined" style={{ margin: "10px 0 20px" }}>
          <TextField 
            label="Project" 
            variant="outlined" 
            className='inputField' 
            value={this.state.project}
            onChange={this.handleProjectChange}
          />
        </FormControl>
        <ButtonGroup disableElevation variant="contained" fullWidth>
          <Button className='buttonBlue' fullWidth>{submitText}</Button>
          <Button className='buttonRed' fullWidth>Cancel</Button>
        </ButtonGroup>
      </Card>
    );
  }
}