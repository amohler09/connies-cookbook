import React from 'react';
import { useParams } from 'react-router-dom';

export default function RecipePage() {
  let { recipe } = useParams();



  return (
    <div>
      HEY! THERE!
    </div>
  )
}