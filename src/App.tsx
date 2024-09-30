import { Outlet } from 'react-router-dom'

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <div id='main-window'><Outlet /></div>
      {/* <Footer /> */}
    </>
  )
}

export default App
