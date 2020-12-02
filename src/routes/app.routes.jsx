import React from 'react'
import { Switch, Route } from 'react-router-dom';
import LandingPage from '../pages/Landing'
import Project from '../pages/Project'
import About from '../pages/About'
import Interactive from '../pages/Interactive'
import FormOne from '../pages/FormOne'




const AppRoutes = () => (
   
      <Switch>
         <Route path="/" exact component={LandingPage} />
         <Route path="/project" exact component={Project} />
         <Route path="/project/interactive" exact component={Interactive} />
         <Route path="/project/formone" exact component={FormOne} />

         <Route path="/about" exact component={About} />
      </Switch>
   
)

export default AppRoutes