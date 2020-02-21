import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import axios from "axios"

import PhotoName from "./PhotoName.js"

export default function() {
  const [photos, setPhotos] = useState([])

  function fetchPhotos(id) {
    axios.get(`albums/${id}?_embed=photos`).then(resp => {
      setPhotos(resp.data)
    })
  }

  useEffect(() => {
    fetchPhotos()
  }, [])

  return (
    <div className="myPhotosContainer">
      <h1>My Photos</h1>
      <div className="multiple">
        {photos.map(photo => (
          <Link to={"/PhotoName/" + photo.id}>
            <img src={photos.url} />
          </Link>
        ))}
      </div>
    </div>
  )
}
