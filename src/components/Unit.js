import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Hover from './utils/Hover';

import { data as apartments } from '../data/apartments';

function unslugify(str) {
  return str.split('-').join(' ');
}

export default function Unit({ match }) {
  const { propertyId, unitId } = match.params;
  const apartment = apartments.find((item) => item.id === unitId);
  const {
    description,
    bedrooms,
    bathrooms,
    price,
    squareFt,
    availableDate,
  } = apartment;

  return (
    <div>
      <div className='bis-row'>
        <div className={`banner relative banner-${propertyId}`}>
          <Link className='text-white back-btn' to='/search'>
            Back to Search
          </Link>
          <div className='bis-row text-white'>
            <div className='col'>
              <h2>{unslugify(propertyId)}</h2>
              <h3>
                {bedrooms} BA, {bathrooms} BA
              </h3>
              <h3>{squareFt} square feet</h3>
            </div>
            <div className='col'>
              <h3>${price}</h3>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='bis-row bg-gray'>
        <h3 className='col'>Available {availableDate}</h3>
      </div>
      <div className='bis-row bg-gray'>
        <div className='col'>
          <Hover>
            {(hovering) => {
              return (
                <div className='relative'>
                  <img src={require('../img/interior1.jpg')} />
                  <div className={`overlay show-${hovering}`}>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Itaque, sapiente.
                    </p>
                  </div>
                </div>
              );
            }}
          </Hover>
        </div>
        <div className='col'>
          <Hover>
            {(hovering) => {
              return (
                <div className='relative'>
                  <img src={require('../img/interior2.jpg')} />
                  <div className={`overlay show-${hovering}`}>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Itaque, sapiente.
                    </p>
                  </div>
                </div>
              );
            }}
          </Hover>
        </div>
      </div>
      <div className='bis-row bg-gray'>
        <div className='col'>
          <Hover>
            {(hovering) => {
              return (
                <div className='relative'>
                  <img src={require('../img/interior3.jpg')} />
                  <div className={`overlay show-${hovering}`}>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Itaque, sapiente.
                    </p>
                  </div>
                </div>
              );
            }}
          </Hover>
        </div>
        <div className='col'>
          <Hover>
            {(hovering) => {
              return (
                <div className='relative'>
                  <img src={require('../img/interior4.jpg')} />
                  <div className={`overlay show-${hovering}`}>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Itaque, sapiente.
                    </p>
                  </div>
                </div>
              );
            }}
          </Hover>
        </div>
      </div>

      <div className={`banner banner-bottom-${propertyId}`}></div>

      <div className='bg-dark text-white'>
        <div className='bis-row'>
          <div className='col'>
            <h2>Schedule a tour or email us:</h2>
          </div>
          <div className='col'>
            <div>
              <h3>512-555-5555</h3>
            </div>
            <div>Grackleproperties@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}
