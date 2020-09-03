// input for file

import React from 'react'
import XipsoloModel from '../models/Xipsolo'

class  NewXipsolo extends React.Component {
    state= {
        name: '',
        desc: ''
    } 



    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
     }

    handleSubmit = (event) => {
            event.preventDefault()
            XipsoloModel.create(this.state)
            .then(data => {
                console.log(data) 
                this.props.history.push('/xipsolos')
            })
           

    }
        render() {
            return(
                <form onSubmit={this.handleSubmit}>
                    <h1>Create Xipsolo</h1>
                        <label>
                            Name:<input type= "text" value={this.state.name} name="name" onChange={this.handleChange}
                            />
                        </label>
                        <label>
                            Desc:<input type= "text" value={this.state.desc} name="desc" onChange={this.handleChange}    
                            />
                        </label>
                    <input type = "submit" value="Submit" />
                </form>
                )

            }
    
}

    export default NewXipsolo
