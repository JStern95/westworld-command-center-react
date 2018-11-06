import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import Area from "./Area"


class WestworldMap extends Component {

  render(){
    return (
      <Segment id="map" >
        {this.props.allInfo.areas.map(area=> <Area areaObj={area} hosts={this.props.hosts} highlightSelected={this.props.highlightSelected}/>) }

      </Segment>
    )
  }
}

export default WestworldMap
