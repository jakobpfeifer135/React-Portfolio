import { useState } from 'react'
import Sidenav from './components/Sidenav';
import Main from './components/Main';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from './pages/Home';
// import AboutMe from './pages/AboutMe';
// import Portfolio from './pages/Portfolio';
// import ContactMe from './pages/ContactMe';
// import Resume from './pages/Resume';

// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/home" component={Home} />
//         <Route path="/aboutMe" component={AboutMe} />
//         <Route path="/portfolio" component={Portfolio} />
//         <Route path="/contactMe" component={ContactMe} />
//         <Route path="/resume" component={Resume} />
//         {/* Add more routes for other pages */}
//       </Switch>
//     </Router>
//   );
// }

// export default App;

function App() {

  return (
    <div>
    <Sidenav />
     <Main />
    </div>
  )
}

export default App
