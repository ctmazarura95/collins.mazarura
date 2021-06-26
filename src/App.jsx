import React from 'react'
import './bootstrap.min.css'
import NavBar from './components/NavBar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import './index.css'
import {BrowserRouter as Router,Route} from 'react-router-dom'
const App = () => {
    return (
        <>
            <Router>
                <NavBar/>
                <Route path="/" component={About} exact />
                <Route path="/skills" component={Skills} />
                <Route path="/projects" component={Projects}  />
            </Router>
        </>
    )
}

export default App
