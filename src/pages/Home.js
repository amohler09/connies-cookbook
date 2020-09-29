import React from 'react';

import './Home.scss'
import GalleryComponent from '../components/GalleryComponent';

export default function Home(categories) {
  const allCategories = categories.categories;



  return (
    <div className='container'>
      <h2>Categories</h2>

      <div className='categories'>
        <h3>Side Dishes</h3>
      <GalleryComponent {...allCategories.Sides} />
      
      {/* <GalleryComponent {...allCategories.BreadsCrackers} /> */}
      </div>
     </div>
       )
  }
