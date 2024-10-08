import { Outlet } from 'react-router-dom'

import { ThemeProvider, useTheme } from './ThemeContext';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './App.css'
import { useEffect } from 'react';

function AppContent() {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <div id='main-window'><Outlet /></div>
      {/* <Footer /> */}
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App
