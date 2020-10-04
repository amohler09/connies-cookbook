import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import RecipePage from './components/RecipePage'
import CategorySummaryPage from './components/CategorySummaryPage'

import './App.css';

function App() {

  
  return (
    <main>
      <Switch>
     <Route exact path='/' component={Home} />
     <Route path='/:category' children={<CategorySummaryPage/>} />
     <Route path='/:recipe' children={<RecipePage/>} />
     </Switch>
    </main>
  );
}

export default App;
