import React, { Component } from 'react'
import XipsoloModel from '../models/Xipsolo'

import { Link } from 'react-router-dom'
import XipsoloNet from '../components/XipsoloNet'

class XipsoloList extends Component {
  state = {
    xipsolos: []
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    XipsoloModel.all().then(data => {
      console.log(data)
      this.setState({ xipsolos: data.xipsolos })
    })
  }

  render() {
    let xipsoloList = this.state.xipsolos.map((xipsolo, index) => {
      return (
        <Link to={`/xipsolos/${ xipsolo._id }`} key={index}>
          <XipsoloNet xipsolo={xipsolo} />
        </Link>
      )
    })

    return (
      <div>
        <h1>All Xipsolos</h1>
        { this.state.xipsolos ? xipsoloList : 'Loading...' }
      </div>
    );
  }
}

export default XipsoloList;