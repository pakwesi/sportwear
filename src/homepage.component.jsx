import React from 'react';
import App from './App';

import './homepage.styles.scss';

const Homepage = () => (
    <div className='homepage'>
      <div className='directory-menu'>
       <div className='menu-item'>
        <div className='content'>
         <h1 className='title'>Hats</h1>
         <span className='subtitle'>Shop Now</span>
        </div>
       </div>
              <div className='menu-item'>
        <div className='content'>
         <h1 className='title'>SNEADKERS</h1>
         <span className='subtitle'>Shop Now</span>
        </div>
       </div>
              <div className='menu-item'>
        <div className='content'>
         <h1 className='title'>JACKETS</h1>
         <span className='subtitle'>Shop Now</span>
        </div>
       </div>
              <div className='menu-item'>
        <div className='content'>
         <h1 className='title'>Woman</h1>
         <span className='subtitle'>Shop Now</span>
        </div>
       </div>
              <div className='menu-item'>
        <div className='content'>
         <h1 className='title'>Mens</h1>
         <span className='subtitle'>Shop Now</span>
        </div>
       </div>
      </div>
    </div>
)

export default Homepage;