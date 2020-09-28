import React, { useEffect, useState } from 'react';

import './Home.scss'
import GalleryComponent from '../components/GalleryComponent';

export default function Home(categories) {
  const allCategories = categories.categories;



  return (
    <div className='container'>
      Home Page
      <GalleryComponent {...allCategories.Sides} />
     
     </div>
       )
  }
