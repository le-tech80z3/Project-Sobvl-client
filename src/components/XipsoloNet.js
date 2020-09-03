import React from 'react';
import './XipsoloNet.scss'

const XipsoloNet = (props) => { 
  console.log('line 5', props)
  return (
    <div className="XipsoloNet">
      <div className="image-wrap">
      </div>
      <h3>{ props.xipsolo.name }</h3>
      <p>By: { props.xipsolo.desc }</p>
      <hr />
    </div>
  );
}

export default XipsoloNet;