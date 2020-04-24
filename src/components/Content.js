import React, { Fragment } from 'react';
import { data } from '../data/apartments';
import { properties } from '../data/properties';

export default function Content({ params }) {
  const { beds, baths, property } = params;
  const [units, setUnits] = React.useState([]);

  React.useEffect(() => {
    let items = data
      .filter((item) => {
        if (beds.length === 0) return true;
        return beds.includes(item.bedrooms.toString());
      })
      .filter((item) => {
        if (baths.length === 0) return true;
        return baths.includes(item.bathrooms.toString());
      })
      .filter((item) => {
        if (property === 'All') return true;
        return item.property === property;
      });

    setUnits(items);
  }, [beds, baths, property]);

  return (
    <div>
      <SortBar setUnits={setUnits} units={units} />

      <ul className='unit-list'>
        {units.map((item) => {
          return (
            <li key={item.id}>
              <UnitPreview
                property={item.property}
                description={item.description}
                price={item.price}
                bedrooms={item.bedrooms}
                bathrooms={item.bathrooms}
                availableDate={item.availableDate}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function UnitPreview(props) {
  const property = properties.find((item) => {
    return item.id === props.property;
  });

  return (
    <div className='unit-item'>
      <img src={require(`../img/interior${props.property}.jpg`)} />
      <p>{property.name}</p>
      <p>{props.description}</p>
      <p>Price: ${props.price}</p>
      <p>Beds: {props.bedrooms}</p>
      <p>Baths: {props.bathrooms}</p>
      <p>Available: {props.availableDate}</p>
    </div>
  );
}

function SortBar({ units, setUnits }) {
  const sortUnits = (aspect, direction) => {
    let sortedArray = [...units];

    if (aspect === 'price') {
      sortedArray.sort((a, b) => {
        if (direction === 'desc') {
          return b.price - a.price;
        } else if (direction === 'inc') {
          return a.price - b.price;
        }
      });
    } else if (aspect === 'date') {
      const currentlyAvailable = sortedArray.filter(
        (item) => item.availableDate === 'now'
      );
      const sortedAvailable = sortedArray
        .filter((item) => item.availableDate !== 'now')
        .sort((a, b) => {
          let dates = {
            a: new Date(a.availableDate),
            b: new Date(b.availableDate),
          };

          if (dates.a.getMonth() !== dates.b.getMonth()) {
            return dates.a.getMonth() - dates.b.getMonth();
          } else {
            return dates.a.getDate() - dates.b.getDate();
          }
        });

      sortedArray = currentlyAvailable.concat(sortedAvailable);
    }

    setUnits(sortedArray);
  };

  return (
    <div>
      <h3>Sort By:</h3>
      <select>
        <option default>Choose a sort filter</option>
        <option value='l>hprice' onClick={() => sortUnits('price', 'inc')}>
          Price: Low to High
        </option>
        <option value='h>lprice' onClick={() => sortUnits('price', 'desc')}>
          Price: High to Low
        </option>
        <option value='date' onClick={() => sortUnits('date')}>
          Date Available
        </option>
      </select>
    </div>
  );
}
