import React from 'react';

import GalleryComponent from '../components/GalleryComponent';

import './Home.scss'

const Family = require('../img/IMG_0222.jpg');

export default function Home({ cookbook }) {
  return (
    <div className='container'>
      <div className='hero'>
        <div className='grid g-1'></div>
        <div className='grid g-2'></div>
        <div className='grid g-3'></div>
        <div className='grid g-4'></div>
        <div className='grid g-5'></div>
        <div className='grid g-6'></div>
        <div className='hero-text'>
          <p>Connie's</p>
          <p>Cookbook</p>
          </div>
      </div>
      <div className='intro'>
        <p>My family has always been known for our food; we like to feed large crowds, we don’t shy away from seasoning, and we like to try new ingredients and techniques. For as long as I can remember, my father had huge binders full of recipes that my grandma Connie had collected throughout her life, from newspaper clippings to magazine recipes to her own hand-typed creations.</p>
        <p>My dad always told me that my grandma loved to throw dinner parties and entertain people, and her recipe books certainly reflected that. In her binders, she had thousands of recipes that were collected between 1930-1990.</p>
        <p>I created as a place to hold only a few of the recipes that I thought sounded either delicious or just too crazy to work out, and I plan on continuing to update this with more of her recipes in time as well as typed-out, printable versions of each recipe. I scanned each picture from her original books myself and edited each one to preserve as much of the detail as possible - from the taped down edges to my grandma's handwritten enhancements. It is amazing how much thought and effort went into each meal and how families looked at mealtime as a gathering to share ideas, stories, and laughter. It’s a pretty far cry from the quick and convenient lives we all lead today. I hope that you find her recipes as interesting as I do, and that her memory may continue to live on through these pages.</p>
        <p className='intro-bottom'>*All nutritional information listed in these recipes are estimates only.</p>
      </div>
        <img src={Family} />
        <h2>Categories</h2>
      <div className='categories'>
        {cookbook && cookbook.map((category, i) => (
          <div className='category' key={i}>
            <GalleryComponent {...category}/>
          </div>
        ))}
      </div>
     </div>
   )
  }
