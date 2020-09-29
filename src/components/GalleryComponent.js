import React, { useState, useRef } from 'react';
import RecipeCard from './RecipeCard';
import './GalleryComponent.scss';

export default function GalleryComponent(props) {
  const [currentImg, setCurrentImg] = useState(0);

  const recipes = Object.values(props);

  //create a ref to determine what will be the gallery
  const currentImgRef = useRef(null);

// console.log(props)
// console.log(recipes)

  // if at the end/beginning of list, start over again
  const moveLeft = () => currentImg === 0 ? setCurrentImg(recipes.length - 1) : setCurrentImg(currentImg - 1);
  const moveRight = () => currentImg < recipes.length - 1 ? setCurrentImg(currentImg + 1) : setCurrentImg(0);

  return (
    <div className='gallery-flex'>
      <button onClick={moveLeft}><i class="fas fa-angle-left"></i></button>
        {/* -map through recipe category passed as props
        -change className to hidden/current depending on current index vs. currentImg #
        -if image should be the current one, add the useRef hook to connect the actions */}
        {recipes.map((recipe, i) => {
          const current = i === currentImg;
          return (
            <div className={`card ${current ? 'current' : 'hidden'}`} ref={current ? currentImgRef : null} id={`${recipe.name} recipe`} key={i}>
              <RecipeCard {...recipe} />
              </div>
          )
        })}
      <button onClick={moveRight}><i class="fas fa-angle-right"></i></button>
    </div>
  )
}