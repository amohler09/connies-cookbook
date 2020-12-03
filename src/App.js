import React, { useState, useEffect } from 'react';

import { Route, Switch, useLocation, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import RecipePage from './components/RecipePage'
import CategorySummaryPage from './components/CategorySummaryPage'
import RecipeModal from './components/RecipeModal'

import {categorySorter} from './helpers/categorySorter'

import './App.css';

const recipes = require('./recipes.data');

function App() {
  const [cookbook] = useState([
    {'Breads & Crackers': []},
    {'Breakfast': []},
    {'Desserts': []},
    {'Drinks': []},
    {'Entrees': []},
    {'Muffins': []},
    {'Salads & Dressings': []},
    {'Sauces': []},
    {'Seasonings & Marinades': []},
    {'Sides': []},
    {'Small Plates & Snacks': []},
    {'Soups': []},
    {'Spreads & Dips': []}
  ])

  // use the location hook to have an 'anchorpoint' to determine whether the category summary page is showing or not
  let location = useLocation();

  // define a background which can be turned on/off based on the location
  // when in category summary or home page, keep it displayed in background while modal is present
  let background = location.state && location.state.background

  // run the helper function and organize the cookbook
  useEffect(() => {
    categorySorter(recipes.RecipeData, cookbook);
  }, [cookbook])
  
  return (
    <main>
      <Switch location={background || location}>
        <Route path='/Categories/:category' render={() => <CategorySummaryPage cookbook={cookbook}  />} />
        {/* <Route path='/:recipe' render={() => <RecipePage cookbook={cookbook} />} /> */}
        <Route exact path='/' render={() => <Home cookbook={cookbook} />} />
     </Switch>

     {/* show the recipe modal while keeping background present */}
     {background ? <Route path='/Recipes/:active' children={<RecipeModal />} /> : <Redirect to='/' />}
    </main>
  );
}

export default App;
