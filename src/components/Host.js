import React, { Component }  from 'react';
import { Card } from 'semantic-ui-react'

class Host extends Component {

  render(){
    let style = this.props.host.clicked ? {width: "50px", border: "2px solid red", borderRadius: "5px"} : {width: "50px"}

    return(
      <Card onClick={()=>this.props.highlightSelected(this.props.host.id)} style={style}
        raised
        image={this.props.host.imageUrl}
      />
    )
  }

}

export default Host
