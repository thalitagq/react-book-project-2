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
        style={{padding: '2rem 1rem'}}
      >
        <div className=''>
          aaaaaaaaaa
          <EditableTimerList />
          <ToggleableTimerForm
            isOpen={true}
          />
        </div>
      </Grid>
    );
  }
}