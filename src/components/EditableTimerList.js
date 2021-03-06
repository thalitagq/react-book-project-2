import { Grid } from '@material-ui/core';
import React from 'react'
import { EditableTimer } from './EditableTimer';

export class EditableTimerList extends React.Component {
  render() {
    
    const timers = this.props.timers.map((timer) => (
      <EditableTimer
        key={timer.id}
        id={timer.id}
        title={timer.title}
        project={timer.project}
        elapsed={timer.elapsed}
        runningSince={timer.runningSince}
        onFormSubmit={this.props.onFormSubmit}
      />
    ));

    return (
      <Grid container direction="column" id='timers'>
        <Grid item>
          {timers}
        </Grid>
      </Grid>
    )
  }  
}