import React from 'react';
import './RecipeCard.scss'

export default function RecipeCard(recipe) {
  console.log(recipe);
  
  return (
    <div className='recipe-card'>
      
      <p className='name'>{recipe.name}</p>
      <img src={recipe.url} className={recipe.orientation === 'horizontal' ? 'horizontal' : ''}/>
    </div>
  )
}

// {`${recipe.orientation === 'horizontal' ? 'card-vertical' : 'card-vertical'}`}