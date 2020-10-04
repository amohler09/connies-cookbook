import React, { useState } from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import RecipePage from './components/RecipePage'
import CategorySummaryPage from './components/CategorySummaryPage'

import {categorySorter} from './helpers/categorySorter'

import './App.css';

const recipes = require('./recipes.data');

function App() {
  const [cookbook] = useState([
    {'Breads/Crackers': []},
    {'Breakfast': []},
    {'Desserts': []},
    {'Drinks': []},
    {'Entrees': []},
    {'Muffins': []},
    {'Salads/Dressings': []},
    {'Sauces': []},
    {'Seasonings/Marinades': []},
    {'Sides': []},
    {'Appetizers/Snacks': []},
    {'Soups': []},
    {'Spreads/Dips': []}
  ])

  //run the helper function and organize the cookbook
  categorySorter(recipes, cookbook);
  
  return (
    <main>
      <Switch>
        <Route path='/Categories/:category' render={() => <CategorySummaryPage cookbook={cookbook}  />} />
        <Route path='/:recipe' render={() => <RecipePage cookbook={cookbook} />} />
        <Route exact path='/' render={() => <Home cookbook={cookbook} />} />
     </Switch>
    </main>
  );
}

export default App;
