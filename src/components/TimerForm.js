import { Button, ButtonGroup, Card, Grid, TextField } from '@material-ui/core';
import React from 'react'
import { StylesProvider } from '@material-ui/core/styles';
import '../styles/TimerForm.css'

export class TimerForm extends React.Component {
  render() {
    const submitText = this.props.title ? 'Update' : 'Create';
    return (
      <StylesProvider injectFirst>
        <Card className='card'>
          <Grid container direction='column' spacing={2} className='' noValidate autoComplete="off">
            <Grid item>
              <TextField label="Title" variant="outlined" className='inputField' defaultValue={this.props.title}/>
            </Grid>
            <Grid item>
              <TextField label="Project" variant="outlined" className='inputField' defaultValue={this.props.project}/>
            </Grid>
            <Grid item className=''>
              <ButtonGroup disableElevation variant="contained" fullWidth>
                <Button className='buttonBlue' fullWidth>{submitText}</Button>
                <Button className='buttonRed' fullWidth>Cancel</Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        </Card>
      </StylesProvider>
    );
  }
}