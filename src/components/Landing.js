import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className='landing d-flex align-center'>
      <div className='splash'>
        <h1 className='text-white'>Grackle Properties</h1>
        <h3 className='text-yellow raleway font-big'>
          Find your new home in Austin!
        </h3>

        <Link className='link d-flex align-items sm-col' to='/search'>
          <i className='fas fa-crow text-white mt-2 fa-4x'></i>
        </Link>
      </div>
    </div>
  );
}
