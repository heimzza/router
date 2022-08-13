import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, NavLink, useParams, Navigate } from 'react-router-dom'

class App extends Component {
  state = {
    loggendIn:false
  };
  ClickButton = () => {
    this.setState(prevState => ({
      loggendIn:!prevState.loggendIn
    }))
  };
  render () {
    return (
      <Router>
        <NavLink style={{color:'blue'}} to="/">Anasayfa</NavLink><br />
        <NavLink style={{textShadow:'-1px 1px 10px rgba(0, 0, 0, 0.75'}} to="/iletisim">İletişim</NavLink><br />
        <NavLink style={{textDecorationLine: 'underline'}} to="/news/5">Yeni sayfa</NavLink><br />
        <NavLink style={{textDecorationLine: 'underline'}} to="/profile">Profil</NavLink><br />
        <br /><br />
        <input type="button" onClick={this.ClickButton} value={this.state.loggendIn ? 'Log out' : 'Login'} />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/iletisim" element={<Iletisim/>}/>
            <Route path="/news/:id" element={<News/>}/>
            <Route path="/profile" element={
            this.state.loggendIn ? (<Profile/>) : (<Navigate to="/" />)}/>
          </Routes>
      </Router>
    );
  }
}

function News({match}) {
  let { id } = useParams();
  return(<h2>News:{id}</h2>);
}

function Profile({match}) {
  let { id } = useParams();
  return(<h2>Profiles</h2>);
}

function Home() {
  return <h2>Home</h2>;
}

function Iletisim() {
  return <h2>iletisim</h2>;
}

export default App;