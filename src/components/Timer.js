import React from 'react'
import helpers from '../helpers'
import { Card, Button,Icon, Grid} from '@material-ui/core';

export class Timer extends React.Component {
  render() {
    const elapsedString = helpers.renderElapsedString(this.props.elapsed);
    return (
      <Card className='card'>
        <Grid 
          container 
          spacing={2} 
          direction="column"
        >
          <Grid item >
            <h3 className="timerTittle">
              {this.props.title}
            </h3>
          </Grid>
          <Grid item>
            <h4 className="timerSubtittle">
              {this.props.project}
            </h4>
          </Grid>
          <Grid item>
            <h1 className='timerText'>
              {elapsedString}
            </h1>
          </Grid>
          <Grid item style={{marginLeft: 'auto'}}>
            <Icon className="timerIcon">delete</Icon>
            <Icon className="timerIcon">edit</Icon>
          </Grid>
          <Grid>
            <Button className='buttonBlue' fullWidth>
              Start
            </Button>
          </Grid>
        </Grid>
      </Card>
    );
  }
}