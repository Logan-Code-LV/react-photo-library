import React from "react";

export function Albums() {
  const [albums, setAlbums] = useState([])

  function fetchAlbums() {
    axios.get("/albums").then(resp => {
      setAlbums(resp.data)
    })
  }

export function Album() {
  const [photos, setPhotos] = useState([])

  function fetchPhotos() {
    axios.get(`albums/${id}?_embed=photos`).then(resp => {
      setPhotos(resp.data)
    })
  }

  