import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact strict path="/iletisim" element={<Iletisim/>}/>
          </Routes>
      </Router>
    );
  }
}

function Home() {
  return <h2>Home</h2>;
}

function Iletisim() {
  return <h2>iletisim</h2>;
}

export default App;