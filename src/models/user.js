import axios from 'axios'
const REACT_APP_API_URL = "http://localhost:3002/api/v1"

export default class UserModel {
  static async create(data) {
    try {
      const adduser = await axios.post(`${REACT_APP_API_URL}/auth/register`, data)
      return adduser.data 
    } catch (error) {
      console.log(error)  
    }
  }
  
  static async login(credentials) {
    const res = await fetch(`${REACT_APP_API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify(credentials)
    })
      return await res.json()
  }

  static logout() {
    return fetch(`${REACT_APP_API_URL}/auth/logout`, {
      method: "DELETE",
      credentials: 'include'
    })
  }
}