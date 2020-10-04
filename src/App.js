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

  
  categorySorter(recipes, cookbook);

  console.log(cookbook)


  
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
