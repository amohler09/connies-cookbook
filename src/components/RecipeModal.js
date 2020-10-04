import React from 'react';

import { useHistory, useParams } from 'react-router-dom'

import './RecipeModal.scss'

const recipes = require('../recipes.data')

export default function RecipeModal() {
  const history = useHistory();

  const { active } = useParams();

  const activeRecipe = recipes.RecipeData.filter((recipe, i) => recipe.name === active)[0];

  console.log(active)


  const back = e => {
    e.stopPropagation();
    history.goBack();
  }

  console.log(history)
  console.log(active)

  return (
    <div 
      className='modal-bg'>
      <div className='modal'>
        <div className='top'>
        <i class="fas fa-chevron-left" onClick={back}> Back to Recipes</i>
        <h2>{active}</h2>
        </div>
        <img style={{
          width: '60%',
          margin: '0 auto 3%'
        }} src={activeRecipe.url} alt={`${activeRecipe.name} recipe`}/>
      </div>
    </div>
  )
}