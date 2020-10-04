import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import RecipePage from '../components/RecipePage'
import './RecipeCard.scss'

export default function RecipeCard(props) {
  const { category, name, orientation, url } = props;
  // console.log(props);


  
  return (
    <div className='recipe-card'>
      {/* <Link className='name' to={`/${props.name}`}>{props.name}</Link> */}
      
      <Link to={`/${name}`} className='name'>{name}</Link>
      <img src={url} className={orientation === 'horizontal' ? 'horizontal' : ''}/>

      {/* <Switch>
        <Route path={`/${category}/:id`} children={<RecipePage />} />
      </Switch> */}
    </div>
  )
}

// {`${recipe.orientation === 'horizontal' ? 'card-vertical' : 'card-vertical'}`}