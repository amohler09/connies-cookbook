export const categorySorter = (data, cookbook) => {
  data.map(recipe => {
  switch(recipe.category1) {
    case 'BREADS & CRACKERS':
      cookbook[0]['Breads & Crackers'].push(recipe);
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
      cookbook[6]['Salads & Dressings'].push(recipe);
      break;
    case 'SAUCES':
      cookbook[7]['Sauces'].push(recipe);
      break;
    case 'SEASONINGS & MARINADES':
      cookbook[8]['Seasonings & Marinades'].push(recipe);
      break;
    case 'SIDES':
      cookbook[9]['Sides'].push(recipe);
      break;
    case 'SMALL PLATES & SNACKS':
      cookbook[10]['Small Plates & Snacks'].push(recipe);
      break;
    case 'SOUPS':
      cookbook[11]['Soups'].push(recipe);
      break;
    case 'SPREADS & DIPS':
      cookbook[12]['Spreads & Dips'].push(recipe)
      break;
    default:
      return null;
  }

  switch(recipe.category2) {
    case 'BREADS & CRACKERS':
      cookbook[0]['Breads & Crackers'].push(recipe);
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
      cookbook[6]['Salads & Dressings'].push(recipe);
      break;
    case 'SAUCES':
      cookbook[7]['Sauces'].push(recipe);
      break;
    case 'SEASONINGS & MARINADES':
      cookbook[8]['Seasonings & Marinades'].push(recipe);
      break;
    case 'SIDES':
      cookbook[9]['Sides'].push(recipe);
      break;
    case 'SMALL PLATES & SNACKS':
      cookbook[10]['Small Plates & Snacks'].push(recipe);
      break;
    case 'SOUPS':
      cookbook[11]['Soups'].push(recipe);
      break;
    case 'SPREADS & DIPS':
      cookbook[12]['Spreads & Dips'].push(recipe)
      break;
    default:
      return null;
  }

  return null;
  })
}