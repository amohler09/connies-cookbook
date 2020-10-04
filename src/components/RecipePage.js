import React from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom'


export default function RecipePage(cookbook) {
  console.log('recipepage', cookbook)
  const history = useHistory();

  const { recipe } = useParams();

  return (
    <div>
     RECIPE PAGE {recipe}
    </div>
  )
}