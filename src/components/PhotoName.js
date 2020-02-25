import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import axios from "axios"
import "../styles/photostyle.css"

export default function(props) {
  const [photo, setPhoto] = useState({})
  const [photoName, setPhotoName] = useState("")

  function getPhoto(id) {
    return new Promise((resolve, reject) => {
      axios
        .get(`/photos/${id}`)
        .then(resp => {
          resolve(resp.data)
        })
        .catch(e => {
          reject(e)
        })
    })
  }

  useEffect(() => {
    getPhoto(props.match.params.id).then(photo => {
      setPhoto(photo)
    })
  }, [props.match.params])

  return (
    <div className="singlecontainer">
      <h1>{photo.name}</h1>
      <div className="single">
        <img src={photo.url} />
      </div>
    </div>
  )
}
