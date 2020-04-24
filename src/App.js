import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import Content from './components/Content';

function App() {
  const [beds, setBeds] = React.useState([]);
  const [baths, setBaths] = React.useState([]);

  const [property, setProperty] = React.useState('All');

  return (
    <div className='App'>
      <div className='container'>
        <div className='row'>
          <Menu filter={{ setBeds, setBaths, setProperty }} />
          <div className='col content'>
            <Content params={{ beds, baths, property }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
