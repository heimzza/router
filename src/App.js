import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <Router>
        <Link to="/">Anasayfa</Link><br />
        <Link to="/iletisim">İletişim</Link><br />
        <Link to="/news/5">Yeni sayfa</Link><br />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/iletisim" element={<Iletisim/>}/>
            <Route path="/news/:id" element={<News/>}/>
          </Routes>
      </Router>
    );
  }
}

function News({match}) {
  return(<h1>News:{match.params.id}</h1>);
}

function Home() {
  return <h2>Home</h2>;
}

function Iletisim() {
  return <h2>iletisim</h2>;
}

export default App;