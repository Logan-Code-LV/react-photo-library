import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import axios from "axios"
import "../styles/HomeStyle.css"

import AlbumContents from "./AlbumContents"

export default function() {
  const [albums, setAlbums] = useState([])

  function fetchAlbums() {
    axios.get("/albums").then(resp => {
      setAlbums(resp.data)
    })
  }

  useEffect(() => {
    fetchAlbums()
  }, [])

  return (
    <div className="albumscontainer">
      <div className="header">
        <h1>My Albums</h1>
      </div>
      <div className="single">
        {albums.map(album => (
          <Link to={"/AlbumContents/" + album.id}>
            <img src={album.coverPhoto} />
          </Link>
        ))}
      </div>
    </div>
  )
}
