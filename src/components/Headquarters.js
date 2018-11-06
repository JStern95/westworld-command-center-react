import React from 'react';
import { Grid } from 'semantic-ui-react';
import ColdStorage from './ColdStorage'
import HostInfo from './HostInfo'


const Headquarters = (props) => {

  const handleActivate = () =>{
    props.handleActivate()
  }

  const handleDeactivate = () =>{
    props.handleDeactivate()
  }

  return(
    <Grid celled='internally'>
      <Grid.Column width={10}>

        { /* Component goes here */}
        <ColdStorage hosts={props.allInfo.hosts} highlightSelected={props.highlightSelected}/>

      </Grid.Column>

      <Grid.Column width={5}>
        <HostInfo host={props.allInfo.hosts.filter(host=>host.clicked===true)} areas={props.allInfo.areas.map(area=>area.name)} changeHostArea={props.changeHostArea} changeHostStatus={props.changeHostStatus}/>
        <button onClick={handleActivate}>Activate All</button>
        <button onClick={handleDeactivate}>Deactivate All</button>

      </Grid.Column>
    </Grid>
  )
}


export default Headquarters;
