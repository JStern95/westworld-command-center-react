import React, { Component, Fragment } from 'react';
import { Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap'
import Headquarters from './components/Headquarters'

class App extends Component {

  state={
    hosts: [],
    areas: []
  }

  componentDidMount = () =>{
    this.getHostsFetch()
    this.getAreaFetch()
  }

  getHostsFetch = () =>{
    let id = 0
    fetch("http://localhost:3000/hosts")
      .then(res=> res.json())
      .then(parsed=>{
        this.setState({
          ...this.state,
          hosts: parsed.map(host=>{
            return host={...host,
                      clicked: false,
                      id: ++id
                      }
          })
        }, ()=>(console.log(this.state)))
      })
  }

  getAreaFetch = () =>{
    fetch("http://localhost:3000/areas")
    .then(res=> res.json())
    .then(parsed=>{
      this.setState({
        ...this.state,
        areas: parsed
      }, ()=>(console.log(this.state)))
    })
  }

  highlightSelected = (id) =>{
    let hostChange = this.state.hosts.map(host=>{
      if(host.id === id){
        host.clicked = !host.clicked
        return host
      } else {
        host.clicked = false
        return host
      }
    })

    this.setState({
      ...this.state,
      hosts: hostChange
    },()=>console.log(this.state))
  }

  changeHostArea = (id,areaValue)=>{
    let currentHosts = this.state.hosts.filter(host=>host.area=== areaValue).length
    let areaLimit = this.state.areas.find(area=> area.name === areaValue)
    debugger
    if (currentHosts < areaLimit.limit) {
      let hostChange = this.state.hosts.map(host=>{
        if(host.id === id){
          host.area = areaValue
          return host
        } else {
          return host
        }
      })

      this.setState({
        ...this.state,
        hosts: hostChange
      },()=>console.log(this.state))
    } else {
      alert("Too many!")
    }
  }

  changeHostStatus = (id)=>{
    let hostChange = this.state.hosts.map(host=>{
      if(host.id === id){
          if (host.status === "Active") {
            host.status= "Decommissioned"
            host.area= "cold_storage"
            return host
          } else {
            host.status = "Active"
            return host
          }
        return host
      } else {
        return host
      }
    })

    this.setState({
      ...this.state,
      hosts: hostChange
    },()=>console.log(this.state))
  }

  handleActivate = () =>{
    let hostChange = this.state.hosts.map(host =>{
      host.status= "Active"
      return host

    })
    this.setState({
      ...this.state,
      hosts: hostChange
    },()=>console.log(this.state))
  }

  handleDeactivate = () =>{
    let hostChange = this.state.hosts.map(host =>{
      host.status= "Decommissioned"
      host.area= "cold_storage"
      return host

    })
    this.setState({
      ...this.state,
      hosts: hostChange
    },()=>console.log(this.state))
  }

  render(){
    return (
      <Segment id='app'>
      <WestworldMap allInfo={this.state} highlightSelected={this.highlightSelected} hosts={this.state.hosts.filter(host=> host.area != "cold_storage" && host.status === "Active")}/>
        { /* Your code here */}
      <Headquarters allInfo={this.state} highlightSelected={this.highlightSelected} changeHostArea={this.changeHostArea} changeHostStatus={this.changeHostStatus} handleActivate={this.handleActivate} handleDeactivate={this.handleDeactivate}/>
      </Segment>
    )
  }
}

export default App;
// host.area= "cold_storage"
