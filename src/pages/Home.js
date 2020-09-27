import React from 'react';

const recipes = require('../recipes.data');

export default function Home() {
  return (
    <div>
      <div className='grid'>
        Connie's Classics
      </div>
      {recipes.RecipeData.map(item => (
        console.log(item.category1, item.category2, item.category3)
        
    //    <div>
    //    <img src={item.url} alt={`${item.name} recipe`} />
    //    <p>{item.name}</p>
    //    <p>{item.category}</p>
    //  <p>{item.notes && item.notes}</p>
    //    </div>
     ))}
      </div>
  )
}