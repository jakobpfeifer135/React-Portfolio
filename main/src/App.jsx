// import { useState } from 'react'
import Sidenav from './components/Sidenav';
// import Main from './pages/Home';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div>
    <Sidenav />
     
     <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App
