import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './page/Home'
import Footer from "./component/Footer";
import ScrollTop from './component/ScrollTop'


function App() {

  return (
    <BrowserRouter>

      {/* Always open page from top */}
      <ScrollTop />

      <div className="md:bg-gray-200/60 bg-gray-100 min-h-screen">


        <Routes>
          <Route path="/" element={<Home />} />
         
        </Routes>

        <Footer />

      </div>
    </BrowserRouter>
  )
}

export default App