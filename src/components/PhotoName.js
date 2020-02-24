import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import axios from "axios"

export default function(props) {
  const [photo, setPhoto] = useState({})
  const [photoName, setPhotoName] = useState("")

  function fetchPhoto(id) {
    axios.get(`/photo/${id}?_expand=album`).then(resp => {
      setPhoto(resp.data.url)
      setPhotoName(resp.data.name)
    })
  }

  useEffect(() => {
    const id = props.match.params.id
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
