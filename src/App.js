import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import Home from './pages/Home';
import BreadsCrackers from './pages/BreadsCrackers';
import Breakfast from './pages/Breakfast';
import Desserts from './pages/Desserts';
import Drinks from './pages/Drinks';
import Entrees from './pages/Entrees';
import Muffins from './pages/Muffins';
import SaladsDressings from './pages/SaladsDressings';
import Sauces from './pages/Sauces';
import SeasoningsMarinades from './pages/SeasoningsMarinades';
import Sides from './pages/Sides';
import SmallPlates from './pages/SmallPlates';
import Soups from './pages/Soups';
import SpreadsDips from './pages/SpreadsDips'

import './App.css';

const recipes = require('./recipes.data');

function App() {
  const [categories] = useState({
    BreadsCrackers: [],
    Breakfast: [],
    Desserts: [],
    Drinks: [],
    Entrees: [],
    Lunch: [],
    Muffins: [],
    Pickling: [],
    SaladsDressings: [],
    Sauces: [],
    SeasoningsMarinades: [],
    Sides: [],
    SmallPlatesSnacks: [],
    Soups: [],
    SpreadsDips: [],
  })

  recipes.RecipeData.map(recipe => {
    switch(recipe.category1) {
      case 'BREADS & CRACKERS':
        categories.BreadsCrackers.push(recipe);
        break;
      case 'BREAKFAST':
        categories.Breakfast.push(recipe);
        break;
      case 'DESSERTS':
        categories.Desserts.push(recipe);
        break;
      case 'DRINKS':
        categories.Drinks.push(recipe);
        break;
      case 'ENTREES':
        categories.Entrees.push(recipe);
        break;
      case 'MUFFINS':
        categories.Muffins.push(recipe);
        break;
      case 'SALADS & DRESSINGS':
        categories.SaladsDressings.push(recipe);
        break;
      case 'SAUCES':
        categories.Sauces.push(recipe);
        break;
      case 'SEASONINGS & MARINADES':
        categories.SeasoningsMarinades.push(recipe);
        break;
      case 'SIDES':
        categories.Sides.push(recipe);
        break;
      case 'SMALL PLATES & SNACKS':
        categories.SmallPlatesSnacks.push(recipe);
        break;
      case 'SOUPS':
        categories.Soups.push(recipe);
        break;
      case 'SPREADS & DIPS':
        categories.SpreadsDips.push(recipe)
        break;
      default:
        return null;
    }

    switch(recipe.category2) {
      case 'BREADS & CRACKERS':
        categories.BreadsCrackers.push(recipe);
        break;
      case 'BREAKFAST':
        categories.Breakfast.push(recipe);
        break;
      case 'DESSERTS':
        categories.Desserts.push(recipe);
        break;
      case 'DRINKS':
        categories.Drinks.push(recipe);
        break;
      case 'ENTREES':
        categories.Entrees.push(recipe);
        break;
      case 'MUFFINS':
        categories.Muffins.push(recipe);
        break;
      case 'SALADS & DRESSINGS':
        categories.SaladsDressings.push(recipe);
        break;
      case 'SAUCES':
        categories.Sauces.push(recipe);
        break;
      case 'SEASONINGS & MARINADES':
        categories.SeasoningsMarinades.push(recipe);
        break;
      case 'SIDES':
        categories.Sides.push(recipe);
        break;
      case 'SMALL PLATES & SNACKS':
        categories.SmallPlatesSnacks.push(recipe);
        break;
      case 'SOUPS':
        categories.Soups.push(recipe);
        break;
      case 'SPREADS & DIPS':
        categories.SpreadsDips.push(recipe)
        break;
      default:
        return null;
    }

    return null;
  })
  
  return (
    <main>
    <Route exact path='/'>
      <Home categories={categories}/>
    </Route>
    <Route path='/Breads&Crackers'>
       <BreadsCrackers recipes={categories.BreadsCrackers}/>
     </Route>
     <Route path='/Breakfast'>
       <Breakfast />
     </Route>
     <Route path='/Dessert'>
       <Desserts />
     </Route>
     <Route path='/Drinks'>
       <Drinks />
     </Route>
     <Route path='/Entrees'>
       <Entrees />
     </Route>
     <Route path='/Muffins'>
       <Muffins />
     </Route>
     <Route path='/Salads&Dressings'>
       <SaladsDressings />
     </Route>
     <Route path='/Sauces'>
       <Sauces />
     </Route>
     <Route path='/Seasonings&Marinades'>
       <SeasoningsMarinades />
     </Route>
     <Route path='/Sides'>
       <Sides />
     </Route>
     <Route path='/SmallPlates&Snacks'>
       <SmallPlates />
     </Route>
     <Route path='/Soups'>
       <Soups />
     </Route>
     <Route path='/Spreads&Dips'>
       <SpreadsDips />
     </Route>
    </main>
  );
}

export default App;
