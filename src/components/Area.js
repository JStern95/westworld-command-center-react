import React from 'react';
import HostList from './HostList';

const Area = (props) => {

  const makeNamePretty = () =>{
    return props.areaObj.name.split("_")
    .map(partOfName=>{
      return partOfName.charAt(0).toUpperCase() + partOfName.slice(1)
    }).join(" ")
  }

  return(
    <div style={props.areaObj.style} className='area'>
      <h3>{makeNamePretty()}</h3>
      <HostList hosts={props.hosts.filter(host=> host.area===props.areaObj.name)} highlightSelected={props.highlightSelected}/>
    </div>
  )
}

export default Area;
