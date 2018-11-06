import React, { Component } from 'react'
import { Radio, Icon, Card, Grid, Image, Dropdown, List, Segment, Divider } from 'semantic-ui-react'


class HostInfo extends Component{

  handleChange = (e) => {
    if (e.target.innerText != "Cold Storage") {
      let value = this.allAreas().find(areaObj=> areaObj.key === e.target.innerText).value
      this.props.changeHostArea(this.props.host[0].id, value)
    }
  }

  toggle = () => {
    this.props.changeHostStatus(this.props.host[0].id)
  }

  mostAreas = () =>{
    return [
      {key: 'Cold Storage', text: 'Cold Storage', value: 'cold_storage'},
      {key: 'High Plains', text: 'High Plains', value: 'high_plains'},
      {key: 'Lowlands', text: 'Lowlands', value: 'lowlands'},
      {key: 'Pariah', text: 'Pariah', value: 'pariah'},
      {key: 'Python Pass', text: 'Python Pass', value: 'python_pass'},
      {key: 'Badlands', text: 'Badlands', value: 'badlands'}
    ]
  }

  allAreas = () =>{
    return [
      {key: 'Cold Storage', text: 'Cold Storage', value: 'cold_storage'},
      {key: 'High Plains', text: 'High Plains', value: 'high_plains'},
      {key: 'Lowlands', text: 'Lowlands', value: 'lowlands'},
      {key: 'Under Construction', text: 'Under Construction', value: 'under_construction'},
      {key: 'Pariah', text: 'Pariah', value: 'pariah'},
      {key: 'Python Pass', text: 'Python Pass', value: 'python_pass'},
      {key: 'Badlands', text: 'Badlands', value: 'badlands'}
    ]
  }

  render(){
    //
    // A lot of these values are hardcoded.....but they shouldn't be, hint hint....
    if (this.props.host.length>0) {
      // debugger
      // const result = this.allAreas().find(area => {debugger;area.value === this.props.host[0].area})
      const findResultElement = this.mostAreas().find(areaObj=> {console.log(`areaObj.value  is ${areaObj.value }`, `this.props.host[0].area is ${this.props.host[0].area}`, `This will evalute to ${areaObj.value === this.props.host[0].area}`)   ;return areaObj.value === this.props.host[0].area})
      const findResultElementBernard = this.allAreas().find(areaObj=> {console.log(`areaObj.value  is ${areaObj.value }`, `this.props.host[0].area is ${this.props.host[0].area}`, `This will evalute to ${areaObj.value === this.props.host[0].area}`)   ;return areaObj.value === this.props.host[0].area})
      // debugger
      return (
        <Segment>
          <Grid>
            <Grid.Column width={6}>
              <Image floated='left' size='small' src={this.props.host[0].imageUrl}/>
            </Grid.Column>
            <Grid.Column width={10}>
              <Card>
                <Card.Content>
                  <Card.Header>
                    <span>{this.props.host[0].firstName + " " + this.props.host[0].lastName}</span> <Icon name={this.props.host[0].gender === "Male" ? "man" : "woman"} />
                  </Card.Header>
                  <Card.Meta>
                    <Radio style={{margin: "10px"}} slider onChange={this.toggle} label={this.props.host[0].status === "Active" ? "Active" : "Decommissioned"} checked={this.props.host[0].status==="Active"}/>
                  </Card.Meta>

                  <Divider />
                  Current Area:
                  <Dropdown
                    onChange={this.handleChange}
                    selection
                    options={this.props.host[0].firstName==="Beranrd" ? this.allAreas() : this.mostAreas()}
                    value={this.props.host[0].firstName==="Beranrd" ? findResultElementBernard.value : findResultElement.value}/>

                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid>
        </Segment>
              )
    } else {
        return (
            <Segment>
            {null}
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            </Segment>
                  )
              }
  }
}

export default HostInfo
// {this.props.host.length===0 ? null : <div><span>{this.props.host[0].firstName + " " + this.props.host[0].lastName}</span> <Icon name={this.props.host[0].gender === "Male" ? "man" : "woman"} /></div>}
