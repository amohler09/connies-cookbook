import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import './RecipeCard.scss'

export default function RecipeCard({ name, orientation, url }) {
  
  let location = useLocation();
  
  return (
    <div className='recipe-card'>
      <Link to={{ 
          pathname: `/Recipes/${name}`, 
          state: { background: location }
          }}
          className='name'>{name}</Link>
      <img src={url} className={orientation === 'horizontal' ? 'horizontal' : ''} alt={`${name} recipe`} />
    </div>
  )
}
