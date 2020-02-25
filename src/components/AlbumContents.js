import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import axios from "axios"
import "/Users/punchcode/Projects/photo-proj/src/styles/liststyle.css"
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
  }, [props.match.params])

  return (
    <div className="myPhotosContainer">
      <h1>{albumName}</h1>
      <div className="single">
        {photos.map(photo => (
          <Link to={"/PhotoName/" + photo.id}>
            <img src={photo.url} />
          </Link>
        ))}
      </div>
      <div className="navbar">
        <Link className="link" to={"/AlbumContents/1"}>
          Album 1
        </Link>
        <Link className="link" to={"/AlbumContents/2"}>
          Album 2
        </Link>
        <Link className="link" to={"/AlbumContents/3"}>
          Album 3
        </Link>
        <Link className="link" to={"/AlbumContents/4"}>
          Album 4
        </Link>
        <Link className="link" to={"/AlbumContents/5"}>
          Album 5
        </Link>
        <Link className="link" to={"/AlbumContents/6"}>
          Album 6
        </Link>
      </div>
    </div>
  )
}
