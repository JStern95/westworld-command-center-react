import React, { Component }  from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host'

const HostList = (props) => (
  <Card.Group itemsPerRow={6}>
    { props.hosts.map(host=> < Host host={host} highlightSelected={props.highlightSelected}/>)}
  </Card.Group>
)


export default HostList
