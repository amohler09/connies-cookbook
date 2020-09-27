import React from 'react';


const recipes = require('../recipes.data');

export default function Home() {

  const filterCategory = category => recipes.RecipeData.map(recipe => (
    recipe.category1 === category && <p>{recipe.name}, {recipe.category1}</p>
  ))
  
    

  return (
    <div>
      <div className='picture-grid'>
        Connie's Classics
      </div>
        <div className='categories'>
        <h2>Breads & Crackers</h2>
          {filterCategory('BREADS & CRACKERS')}
          
        
    
        
    {/* //    <div>
    //    <img src={item.url} alt={`${item.name} recipe`} />
    //    <p>{item.name}</p>
    //    <p>{item.category}</p>
    //  <p>{item.notes && item.notes}</p> */}
    </div>
     
      </div>
  )
}