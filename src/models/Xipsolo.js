const url = `http://localhost:3002/api/v1`

class XipsoloModel {
  static all = () => {
    return fetch(`${url}/xipsolos`).then(res => res.json())
  }

  static show = (xipsoloId) => {
    return fetch(`${url}/xipsolos/${xipsoloId}`).then(res => res.json())
  }

  static create = (xipsoloData) => {
    return fetch(`${url}/xipsolos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(xipsoloData)
    })
      .then(res => res.json())
  }

  static update = (xipsoloData, xipsoloId) => {
    return fetch(`${url}/xipsolos/${xipsoloId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(xipsoloData)
    })
      .then(res => res.json())

  } 
  static delete = (xipsoloId) => {
    return fetch(`${url}/xipsolos/${xipsoloId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
  }
}

export default XipsoloModel