import React from 'react';
import { Route } from 'react-router-dom';

import Home from './pages/Home';
import BreadsCrackers from './pages/BreadsCrackers';
import Breakfast from './pages/Breakfast';
import Desserts from './pages/Desserts';
import Drinks from './pages/Drinks';
import Entrees from './pages/Entrees';
import Lunch from './pages/Lunch';
import Muffins from './pages/Muffins';
import Pickling from './pages/Pickling';
import SaladsDressings from './pages/SaladsDressings';
import Sauces from './pages/Sauces';
import SeasoningsMarinades from './pages/SeasoningsMarinades';
import Sides from './pages/Sides';
import SmallPlates from './pages/SmallPlates';
import Soups from './pages/Soups';
import SpreadsDips from './pages/SpreadsDips'




import './App.css';


function App() {
  
  return (
    <main>
    <Route exact path='/'>
      <Home />
    </Route>
    <Route path='/Breads&Crackers'>
       <BreadsCrackers />
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
     <Route path='/Lunch'>
       <Lunch />
     </Route>
     <Route path='/Muffins'>
       <Muffins />
     </Route>
     <Route path='/Pickling'>
       <Pickling />
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
