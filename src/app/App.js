import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Blog from './Blog';
import BlogPost from './BlogPost';

const App = () => {
  
  return (
    <Router>
      <div className="App">
        
        <SiteHeader />

        <Switch>
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/about" component={About} />
          <Route exact path="/" component={Home} />
          <Route exact path="/blog/:blogPost" component={BlogPost} />
        </Switch>

        <SiteFooter />

      </div>
    </Router>
  )
}

export default App;