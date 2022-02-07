import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const pageSize = 9;
  const country = "in";
  const [progress, setProgress] = useState(0)

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar
          height={2}
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} key="general" pageSize={pageSize} country={country} category="general" color="danger" />} />

          <Route exact path="/business" element={<News setProgress={setProgress} key="business" pageSize={pageSize} country={country} category="business" color="primary" />} />

          <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} country={country} category="entertainment" color="info" />} />

          <Route exact path="/general" element={<News setProgress={setProgress} key="general" pageSize={pageSize} country={country} category="general" color="danger" />} />

          <Route exact path="/health" element={<News setProgress={setProgress} key="health" pageSize={pageSize} country={country} category="health" color="danger" />} />

          <Route exact path="/science" element={<News setProgress={setProgress} key="science" pageSize={pageSize} country={country} category="science" color="success" />} />

          <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={pageSize} country={country} category="sports" color="warning" />} />

          <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={pageSize} country={country} category="technology" color="primary" />} />

        </Routes>
      </Router>
    </div >
  )

}

export default App;