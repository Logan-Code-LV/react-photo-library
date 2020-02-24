import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import axios from "axios"

export default function(props) {
  const [photos, setPhoto] = useState([])
  const [photoName, setPhotoName] = useState("")

  function fetchPhoto(id) {
    axios.get(`/photos/${id}`).then(resp => {
      setPhoto(resp.data.photos.url)
      setPhotoName(resp.data.photos.title)
    })
  }

  useEffect(() => {
    const id = props.match.params.id
    fetchPhoto(id)
  }, [])

  return (
    <div className="singlecontainer">
      <h1>{photoName}</h1>
      <div className="single">
        {photos.map(photo => (
          <img src={photo.url} />
        ))}
      </div>
    </div>
  )
}
