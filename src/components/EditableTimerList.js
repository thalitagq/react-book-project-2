import { Grid } from '@material-ui/core';
import React from 'react'
import { EditableTimer } from './EditableTimer';

export class EditableTimerList extends React.Component {
  render() {
    return (
      <Grid container direction="column" spacing={2} id='timers'>
        <Grid item>
          <EditableTimer
            title='Learn React'
            project='Web Domination'
            elapsed='8986300'
            runningSince={null}
            editFormOpen={false}
          />
        </Grid>
        <Grid item>
          <EditableTimer
            title='Learn extreme ironing'
            project='World Domination'
            elapsed='3890985'
            runningSince={null}
            editFormOpen={true}
          />
        </Grid>          
      </Grid>
    )
  }  
}