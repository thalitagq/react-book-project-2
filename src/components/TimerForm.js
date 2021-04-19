import { Button, ButtonGroup, Card, FormControl, Grid, InputLabel, OutlinedInput, TextField } from '@material-ui/core';
import React from 'react'
import { StylesProvider } from '@material-ui/core/styles';
import '../styles/TimerForm.css'

export class TimerForm extends React.Component {
  render() {
    const submitText = this.props.title ? 'Update' : 'Create';
    return (
      <Card className='card'>
        <FormControl fullWidth variant="outlined" style={{margin:"10px 0 20px"}}>
          <TextField label="Title" variant="outlined" className='inputField' defaultValue={this.props.title}/>
        </FormControl>
        <FormControl fullWidth variant="outlined" style={{ margin: "10px 0 20px" }}>
          <TextField label="Project" variant="outlined" className='inputField' defaultValue={this.props.project}/>
        </FormControl>
        <ButtonGroup disableElevation variant="contained" fullWidth>
          <Button className='buttonBlue' fullWidth>{submitText}</Button>
          <Button className='buttonRed' fullWidth>Cancel</Button>
        </ButtonGroup>
      </Card>
    );
  }
}