import React from 'react';

import { Link } from 'react-router-dom';

import './RecipeCard.scss'

export default function RecipeCard({ name, orientation, url }) {
  
  return (
    <div className='recipe-card'>
      <Link to={`/${name}`} className='name'>{name}</Link>
      <img src={url} className={orientation === 'horizontal' ? 'horizontal' : ''} alt={`${name} recipe`} />
    </div>
  )
}
