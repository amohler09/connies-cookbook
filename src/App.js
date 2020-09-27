import React from 'react';
import './App.css';
const recipes = require('./recipes.data');



function App() {
  return (
    <main>
     {recipes.RecipeData.map(item => (
       <div>
       <img src={item.url} />
       <p>{item.name}</p>
       <p>{item.category}</p>
     <p>{item.notes && item.notes}</p>
       </div>
     ))}
    </main>
  );
}

export default App;
