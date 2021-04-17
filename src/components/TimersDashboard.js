import React from 'react'
import { Grid } from "@material-ui/core";
import { EditableTimerList } from './EditableTimerList';
import { ToggleableTimerForm } from './ToggleableTimerForm';


export class TimersDashboard extends React.Component {
  render() {
    return (
      <Grid 
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={2}
        style={{padding: '2rem 1rem'}}
      >
        <Grid item>
          <EditableTimerList />
        </Grid>
        <Grid item>
          <ToggleableTimerForm
            isOpen={true}
          />
        </Grid>
      </Grid>
    );
  }
}