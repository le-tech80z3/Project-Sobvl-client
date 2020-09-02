import React from 'react';
import './XipsoloNet.scss'

const XipsoloNet = (props) => {
  return (
    <div className="XipsoloNet">
      <div className="image-wrap">
        <img src={ props.coverArtUrl } alt="Xip art"/>
      </div>
      <h3>{ props.title }</h3>
      <p>By: { props.publisher }</p>
      <hr />
    </div>
  );
}

export default XipsoloNet;