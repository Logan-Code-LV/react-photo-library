import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import axios from "axios"

import PhotoName from "./PhotoName.js"

export default function(props) {
  const [photos, setPhotos] = useState([])
  const [albumName, setAlbumName] = useState("")

  function fetchPhotos(id) {
    axios.get(`/albums/${id}?_embed=photos`).then(resp => {
      setPhotos(resp.data.photos)
      setAlbumName(resp.data.name)
    })
  }

  useEffect(() => {
    const id = props.match.params.id
    fetchPhotos(id)
  }, [])

  return (
    <div className="myPhotosContainer">
      <h1>{albumName}</h1>
      <div className="multiple">
        {photos.map(photo => (
          <Link to={"/PhotoName/" + photo.id}>
            <img src={photo.url} />
          </Link>
        ))}
      </div>
    </div>
  )
}
