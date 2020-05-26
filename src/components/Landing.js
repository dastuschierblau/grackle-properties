import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className='landing d-flex align-center'>
      <div className='splash'>
        <h1 className='text-white'>Grackle Properties</h1>
        <h2 className='text-yellow text-center'>
          Click the grackle to find your new home in Austin!
        </h2>

        <Link className='link d-flex align-items sm-col' to='/search'>
          <i className='fas fa-crow text-white mt-2 fa-4x'></i>
        </Link>
        <Link className='corner-link' to='/credits'>
          Photo Credit Page
        </Link>
      </div>
    </div>
  );
}
