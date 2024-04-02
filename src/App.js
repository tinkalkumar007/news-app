import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const pageSize = 6;
  const [progress, setProgress] = useState(0);
  const [mode,setMode]=useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <div>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode}/>
        <div>
          <LoadingBar
            color='#f11946'
            progress={progress} />
        </div>
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} key="/" pageSize={pageSize} category={'general'} country={'in'} mode={mode} toggleMode={toggleMode} />} />
          <Route exact path="/general" element={<News setProgress={setProgress} key="general" pageSize={pageSize} category={'general'} country={'in'} mode={mode} toggleMode={toggleMode} />} />
          <Route exact path="/science" element={<News setProgress={setProgress} key="science" pageSize={pageSize} category={'science'} country={'in'} mode={mode} toggleMode={toggleMode} />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={pageSize} category={'sports'} country={'in'} mode={mode} toggleMode={toggleMode} />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={pageSize} category={'technology'} country={'in'} mode={mode} toggleMode={toggleMode} />} />
          <Route exact path="/business" element={<News setProgress={setProgress} key="business" pageSize={pageSize} category={'business'} country={'in'} mode={mode} toggleMode={toggleMode} />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} category={'entertainment'} country={'in'} mode={mode} toggleMode={toggleMode} />} />
          <Route exact path="/health" element={<News setProgress={setProgress} key="health" pageSize={pageSize} category={'health'} country={'in'} mode={mode} toggleMode={toggleMode} />} />
        </Routes>
      </Router>
    </div>
  )
}
export default App