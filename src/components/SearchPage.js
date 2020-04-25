import React from 'react';

import Menu from './Menu';
import Content from './Content';

function SearchPage() {
  const [beds, setBeds] = React.useState([]);
  const [baths, setBaths] = React.useState([]);

  const [property, setProperty] = React.useState('All');

  return (
    <div className='row'>
      <Menu filter={{ setBeds, setBaths, setProperty }} />
      <div className='col content'>
        <Content params={{ beds, baths, property }} />
      </div>
    </div>
  );
}

export default SearchPage;
