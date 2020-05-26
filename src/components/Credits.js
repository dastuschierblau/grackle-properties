import React from 'react';
import { Link } from 'react-router-dom';

const images = [
  { img: 'brandon-griggs-wR11KBaB86U-unsplash', artist: 'Brandon Griggs' },
  { img: 'brian-mcgowan-ZAA73cj0Iso-unsplash', artist: 'Brian McGowan' },
  { img: 'cassie-burke-K5zbuLp0cv0-unsplash', artist: 'Cassie Burke' },
  { img: 'interior1', artist: 'Naomi Hebert' },
  { img: 'dulcey-lima-wUz-6iB-XmA-unsplash', artist: 'Dulcey Lima' },
  { img: 'interior2', artist: 'Chastity Cortijo' },
  { img: 'francesca-saraco-_dS27XGgRyQ-unsplash', aritst: 'Francesca Saraco' },
  { img: 'interior3', artist: 'Francesca Tosolini' },
  {
    img: 'jan-jakub-nanista-UHyrjKPsshk-unsplash',
    artist: 'Jan Jakub Nanista',
  },
  { img: 'kalpesh-patel-HXnBdQ_pWm0-unsplash', artist: 'Kalpesh Patel' },
  { img: 'interior4', artist: 'Evan Dvorkin' },
  { img: 'ryan-grewell-h3wVB-g8V5Y-unsplash', artist: 'Ryan Grewell' },
  {
    img: 'sebastian-herrmann-N59J_O_JLdQ-unsplash',
    artist: 'Sebastian Herrmann',
  },
  { img: 'steven-ungermann-msIWv99PiAM-unsplash', artist: 'Steven Ungermann' },
];

export default function Credits() {
  return (
    <div className='d-flex flex-column bg-gray'>
      <h1 className='p2 text-center text-purple'>Photo Credits</h1>
      <ul className='photo-grid'>
        {images.map((item) => {
          return (
            <li className='d-flex photo-grid-item' key={item}>
              <div className='overlay'></div>
              <img src={require(`../img/${item.img}.jpg`)} />
              <h4>{item.artist}</h4>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
