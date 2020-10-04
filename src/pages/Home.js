import React, { useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import './Home.scss'
import GalleryComponent from '../components/GalleryComponent';

const recipes = require('../recipes.data');

export default function Home(props) {
  // console.log(props)
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
  
  // const [cookbook] = useState(
  //   {
  //   BreadsCrackers: [],
  //   Breakfast: [],
  //   Desserts: [],
  //   Drinks: [],
  //   Entrees: [],
  //   Lunch: [],
  //   Muffins: [],
  //   Pickling: [],
  //   SaladsDressings: [],
  //   Sauces: [],
  //   SeasoningsMarinades: [],
  //   Sides: [],
  //   SmallPlatesSnacks: [],
  //   Soups: [],
  //   SpreadsDips: [],
  // })

  

  // recipes.RecipeData.map(recipe => {
  //   switch(recipe.category1) {
  //     case 'BREADS & CRACKERS':
  //       cookbook[0].BreadsCrackers.push(recipe);
  //       break;
  //     case 'BREAKFAST':
  //       cookbook[1].Breakfast.push(recipe);
  //       break;
  //     case 'DESSERTS':
  //       cookbook[2].Desserts.push(recipe);
  //       break;
  //     case 'DRINKS':
  //       cookbook[3].Drinks.push(recipe);
  //       break;
  //     case 'ENTREES':
  //       cookbook[4].Entrees.push(recipe);
  //       break;
  //     case 'MUFFINS':
  //       cookbook[5].Muffins.push(recipe);
  //       break;
  //     case 'SALADS & DRESSINGS':
  //       cookbook[6].SaladsDressings.push(recipe);
  //       break;
  //     case 'SAUCES':
  //       cookbook[7].Sauces.push(recipe);
  //       break;
  //     case 'SEASONINGS & MARINADES':
  //       cookbook[8].SeasoningsMarinades.push(recipe);
  //       break;
  //     case 'SIDES':
  //       cookbook[9].Sides.push(recipe);
  //       break;
  //     case 'SMALL PLATES & SNACKS':
  //       cookbook[10].SmallPlatesSnacks.push(recipe);
  //       break;
  //     case 'SOUPS':
  //       cookbook[11].Soups.push(recipe);
  //       break;
  //     case 'SPREADS & DIPS':
  //       cookbook[12].SpreadsDips.push(recipe)
  //       break;
  //     default:
  //       return null;
  //   }

  //   switch(recipe.category2) {
  //     case 'BREADS & CRACKERS':
  //       cookbook[0].BreadsCrackers.push(recipe);
  //       break;
  //     case 'BREAKFAST':
  //       cookbook[1].Breakfast.push(recipe);
  //       break;
  //     case 'DESSERTS':
  //       cookbook[2].Desserts.push(recipe);
  //       break;
  //     case 'DRINKS':
  //       cookbook[3].Drinks.push(recipe);
  //       break;
  //     case 'ENTREES':
  //       cookbook[4].Entrees.push(recipe);
  //       break;
  //     case 'MUFFINS':
  //       cookbook[5].Muffins.push(recipe);
  //       break;
  //     case 'SALADS & DRESSINGS':
  //       cookbook[6].SaladsDressings.push(recipe);
  //       break;
  //     case 'SAUCES':
  //       cookbook[7].Sauces.push(recipe);
  //       break;
  //     case 'SEASONINGS & MARINADES':
  //       cookbook[8].SeasoningsMarinades.push(recipe);
  //       break;
  //     case 'SIDES':
  //       cookbook[9].Sides.push(recipe);
  //       break;
  //     case 'SMALL PLATES & SNACKS':
  //       cookbook[10].SmallPlatesSnacks.push(recipe);
  //       break;
  //     case 'SOUPS':
  //       cookbook[11].Soups.push(recipe);
  //       break;
  //     case 'SPREADS & DIPS':
  //       cookbook[12].SpreadsDips.push(recipe)
  //       break;
  //     default:
  //       return null;
  //   }

  //   return null;
  // })

  recipes.RecipeData.map(recipe => {
    switch(recipe.category1) {
      case 'BREADS & CRACKERS':
        cookbook[0]['Breads/Crackers'].push(recipe);
        break;
      case 'BREAKFAST':
        cookbook[1]['Breakfast'].push(recipe);
        break;
      case 'DESSERTS':
        cookbook[2]['Desserts'].push(recipe);
        break;
      case 'DRINKS':
        cookbook[3]['Drinks'].push(recipe);
        break;
      case 'ENTREES':
        cookbook[4]['Entrees'].push(recipe);
        break;
      case 'MUFFINS':
        cookbook[5]['Muffins'].push(recipe);
        break;
      case 'SALADS & DRESSINGS':
        cookbook[6]['Salads/Dressings'].push(recipe);
        break;
      case 'SAUCES':
        cookbook[7]['Sauces'].push(recipe);
        break;
      case 'SEASONINGS & MARINADES':
        cookbook[8]['Seasonings/Marinades'].push(recipe);
        break;
      case 'SIDES':
        cookbook[9]['Sides'].push(recipe);
        break;
      case 'SMALL PLATES & SNACKS':
        cookbook[10]['Appetizers/Snacks'].push(recipe);
        break;
      case 'SOUPS':
        cookbook[11]['Soups'].push(recipe);
        break;
      case 'SPREADS & DIPS':
        cookbook[12]['Spreads/Dips'].push(recipe)
        break;
      default:
        return null;
    }

    switch(recipe.category2) {
      case 'BREADS & CRACKERS':
        cookbook[0]['Breads/Crackers'].push(recipe);
        break;
      case 'BREAKFAST':
        cookbook[1]['Breakfast'].push(recipe);
        break;
      case 'DESSERTS':
        cookbook[2]['Desserts'].push(recipe);
        break;
      case 'DRINKS':
        cookbook[3]['Drinks'].push(recipe);
        break;
      case 'ENTREES':
        cookbook[4]['Entrees'].push(recipe);
        break;
      case 'MUFFINS':
        cookbook[5]['Muffins'].push(recipe);
        break;
      case 'SALADS & DRESSINGS':
        cookbook[6]['Salads/Dressings'].push(recipe);
        break;
      case 'SAUCES':
        cookbook[7]['Sauces'].push(recipe);
        break;
      case 'SEASONINGS & MARINADES':
        cookbook[8]['Seasonings/Marinades'].push(recipe);
        break;
      case 'SIDES':
        cookbook[9]['Sides'].push(recipe);
        break;
      case 'SMALL PLATES & SNACKS':
        cookbook[10]['Appetizers/Snacks'].push(recipe);
        break;
      case 'SOUPS':
        cookbook[11]['Soups'].push(recipe);
        break;
      case 'SPREADS & DIPS':
        cookbook[12]['Spreads/Dips'].push(recipe)
        break;
      default:
        return null;
    }

    return null;
  })

  console.log(cookbook)

  return (
    <div className='container'>
      <div className='hero'>
        <div className='grid g-1'></div>
        <div className='grid g-2'></div>
        <div className='grid g-3'></div>
        <div className='grid g-4'></div>
        <div className='grid g-5'></div>
        <div className='grid g-6'></div>
        <div className='hero-text'>
          <p>Connie's</p>
          <p>Cookbook</p>
          </div>
      </div>
      <div className='intro'>
        <p>My family has always been known for our food; we like to feed large crowds, we don’t shy away from seasoning, and we like to try new ingredients and techniques. For as long as I can remember, my father had huge binders full of recipes that my grandma Connie had collected throughout her life, from newspaper clippings to magazine recipes to her own hand-typed creations.</p>
        <p>My dad always told me that my grandma loved to throw dinner parties and entertain people, and her recipe books certainly reflected that. In her binders, she had thousands of recipes that were collected between 1930-1990.</p>
        <p>I created this website to hold only a few of the recipes that I thought sounded either delicious or just too crazy to work out, and I plan on continuing to update this with more of her recipes in time as well as typed-out, printable versions of each recipe. I scanned each picture from her original books myself and edited each one to preserve as much of the detail as possible - from the taped down edges to my grandma's handwritten enhancements. It is amazing how much thought and effort went into each meal and how families looked at mealtime as a gathering to share ideas, stories, and laughter. It’s a pretty far cry from the quick and convenient lives we all lead today. I hope that you find her recipes as interesting as I do, and that her memory may continue to live on through these pages.</p>
        <p className='intro-bottom'>*All nutritional information listed in these recipes are estimates only.</p>
      </div>
      <h2>Categories</h2>
      <div className='categories'>
        {cookbook.map((category, i) => (
          <div className='category' key={i}>
          <GalleryComponent {...category}/>

          </div>
        ))}
      
        
      {/* <Link to='Breakfast'>Breakfast</Link> */}
      {/* <GalleryComponent recipes={categories.Breakfast} category='Breakfast' /> */}
      {/* <Route path='/Breakfast' component={GalleryComponent} /> */}
        {/* <GalleryComponent {...categories.Breakfast} />
        </Route> */}
      </div>

      {/* <div className='categories'>
        <div className='category'>
        <h3>Breakfast</h3>
        <GalleryComponent {...allCategories.Breakfast} />
        </div>
        <div className='category'>
        <h3>Muffins</h3>
        <GalleryComponent {...allCategories.Muffins} />
        </div>
        <div className='category'>
        <h3>Snacks & Small Plates</h3>
        <GalleryComponent {...allCategories.SmallPlatesSnacks} />
        </div>
        <div className='category'>
        <h3>Salads & Dressings</h3>
        <GalleryComponent {...allCategories.SaladsDressings} />
        </div>
        <div className='category'>
        <h3>Soups</h3>
        <GalleryComponent {...allCategories.Soups} />
        </div>
        <div className='category'>
        <h3>Spreads & Dips</h3>
        <GalleryComponent {...allCategories.SpreadsDips} />
        </div>
        <div className='category'>
        <h3>Breads & Crackers</h3>
      <GalleryComponent {...allCategories.BreadsCrackers} />
      </div>
      <div className='category'>
      <h3>Entrees</h3>
        <GalleryComponent {...allCategories.Entrees} />
        </div>
        <div className='category'>
        <h3>Side Dishes</h3>
      <GalleryComponent {...allCategories.Sides} />
      </div>
      <div className='category'>
        <h3>Desserts</h3>
        <GalleryComponent {...allCategories.Desserts} />
        </div>
        <div className='category'>
        <h3>Drinks</h3>
        <GalleryComponent {...allCategories.Drinks} />
        </div>
        <div className='category'>
        <h3>Sauces</h3>
        <GalleryComponent {...allCategories.Sauces} />
        </div>
        <div className='category'>
        <h3>Seasonings & Marinades</h3>
        <GalleryComponent  {...allCategories.SeasoningsMarinades} />
        </div>
      </div> */}
     </div>
       )
  }
