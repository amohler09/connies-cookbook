import React from 'react'
import { useParams, useLocation, Link } from 'react-router-dom'
const recipes = require('../recipes.data')


export default function CategorySummary({ cookbook }) {
  let location = useLocation();

  const { category } = useParams();

  const currentCategory = recipes.RecipeData.filter((recipe => recipe.category1.toLowerCase() === category.toLowerCase() || recipe.category2.toLowerCase() === category.toLowerCase()))

  // map through the recipes and display the gallery/grid of them
  // from the map, return a link with a key={el.id} to={{
  //  pathname: pathname here that matches, state: { background: location }
  // }}
  // add state: { background: location } to what will remain when the modal pops up

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
      {currentCategory.map((recipe, i) => (
        <Link key={i} to={{ 
          pathname: `/Recipes/${recipe.name}`, 
          state: { background: location }
          }}
        >
        
          <img alt={recipe.name} src={recipe.url} style={{ width: 50, height: 50 }} />
          <p>{recipe.name}</p>
        
        </Link>
      ))}
      </div>
  )
}