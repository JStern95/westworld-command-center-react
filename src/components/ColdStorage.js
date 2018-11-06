import React from 'react';
import { Segment } from 'semantic-ui-react'
import HostList from './HostList'


const ColdStorage = (props) => {

  return(
    <Segment style={{height:'100%'}}>
      <h3>ColdStorage</h3>
      <HostList hosts={props.hosts.filter(host=>host.status === "Decommissioned" || host.area === "cold_storage")} highlightSelected={props.highlightSelected}/>
    </Segment>
  )
}

export default ColdStorage
