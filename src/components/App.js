import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import AlbumList from "./AlbumList"
import AlbumContents from "./AlbumContents"
import PhotoName from "./PhotoName"

export default function App() {
  return (
    <Router>
      <div className="wrapper">
        <Route exact path="/" component={AlbumList} />
        <Route exact path="/albumContents/:id" component={AlbumContents} />
        <Route
          exact
          path="/albumContents/photoName/:id"
          component={PhotoName}
        />
      </div>
    </Router>
  )
}
