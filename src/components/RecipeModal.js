import React from 'react';

import { useHistory, useParams } from 'react-router-dom'

import './RecipeModal.scss'

const recipes = require('../recipes.data')

export default function RecipeModal() {
  const history = useHistory();

  const { active } = useParams();

  const activeRecipe = recipes.RecipeData.filter((recipe, i) => recipe.name === active)[0];

  const back = e => {
    e.stopPropagation();
    history.goBack();
  }

  return (
    <div className='modal-bg' onClick={back}>
      <div className='modal'>
        <div className='top'>
          <i class="fas fa-chevron-left" ></i>
          <h2>{active}</h2>
        </div>
        <div style={
          activeRecipe.orientation === 'vertical' ? { maxWidth: '90%' } : { maxWidth: '100%' }
          } >
          <img src={activeRecipe.url} alt={`${activeRecipe.name} recipe`}/>
          </div>
      </div>
    </div>
  )
}