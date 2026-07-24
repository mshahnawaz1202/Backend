import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import CreatePost from './components/CreatePost'
import Feed from './components/Feed'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/create-post' element= {<CreatePost/>} />
        <Route path='/feed' element= {<Feed/>} />
      </Routes>
    </Router>
  )
}

export default App