import React from 'react';

import { data } from '../data/apartments';

import Menu from './Menu';
import Content from './Content';

function SearchPage() {
  const [beds, setBeds] = React.useState([]);
  const [baths, setBaths] = React.useState([]);
  const [property, setProperty] = React.useState('All');

  const [units, setUnits] = React.useState(data);
  const [loading, setLoading] = React.useState(false);

  return (
    <div className='row'>
      <Menu filter={{ units, setUnits }} loading={{ loading, setLoading }} />
      <div className='col content'>
        <Content params={{ units, setUnits, loading, setLoading }} />
      </div>
    </div>
  );
}

export default SearchPage;
