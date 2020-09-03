import React from 'react'
import XipsoloModel from '../models/Xipsolo'

    class  XipsoloShow extends React.Component {
        state= {
            name: '',
            desc: ''
        } 
    
    
    
        handleChange = (event) => {
            this.setState({[event.target.name]: event.target.value});
         }
    
         handleDelete = (event) => {
            event.preventDefault()
            XipsoloModel.delete(window.location.pathname.split("/")[2])
            .then(data => {
                console.log(data) 
                this.props.history.push('/xipsolos')
            })
        }
        handleSubmit = (event) => {
                event.preventDefault()
                XipsoloModel.update(this.state, window.location.pathname.split("/")[2])
                .then(data => {
                    console.log(data) 
                    this.props.history.push('/xipsolos')
                })
               
               
        }
        render() {
            return(
                <form onSubmit={this.handleSubmit}>
                    <h1>Update Xipsolo</h1>
                        <label>
                            Name:<input type= "text" value={this.state.name} name="name" onChange={this.handleChange}
                            />
                        </label>
                        <label>
                            Desc:<input type= "text" value={this.state.desc} name="desc" onChange={this.handleChange}    
                            />
                        </label>
                    <input type = "submit" value="Submit" />
                    <button onClick={this.handleDelete}>Delete</button> 
                </form>
                )

            }
    


        }

        export default XipsoloShow