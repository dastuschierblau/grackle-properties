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
      <SortBar params={params} setUnits={setUnits} units={units} />

      <ul className='unit-list'>
        {units.map((item) => {
          return (
            <li key={item.id}>
              <UnitPreview
                property={item.property}
                squareFt={item.squareFt}
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
      <h4 className='text-purple'>{property.name}</h4>
      <p>{props.squareFt} Square Feet</p>
      <p>Price: ${props.price}</p>
      <p>Beds: {props.bedrooms}</p>
      <p>Baths: {props.bathrooms}</p>
      <p>Available: {props.availableDate}</p>
      <span className='d-flex'>
        <button className='btn'>See Details</button>
      </span>
    </div>
  );
}

function SortBar({ units, setUnits, params }) {
  const [filter, setFilter] = React.useState({
    aspect: '',
    direction: '',
  });

  let selectRef = React.useRef(null);

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
    } else if (aspect === 'size') {
      sortedArray.sort((a, b) => {
        if (direction === 'desc') {
          return b.squareFt - a.squareFt;
        } else if (direction === 'inc') {
          return a.squareFt - b.squareFt;
        }
      });
    }

    setUnits(sortedArray);
  };

  React.useEffect(() => {
    selectRef.current.value = 'default';
    setFilter({
      aspect: '',
      direction: '',
    });
  }, [params]);

  React.useEffect(() => {
    sortUnits(filter.aspect, filter.direction);
  }, [filter.aspect, filter.direction]);

  const changeFilter = (value) => {
    if (value === 'l>hprice') {
      setFilter({
        aspect: 'price',
        direction: 'inc',
      });
    } else if (value === 'h>lprice') {
      setFilter({
        aspect: 'price',
        direction: 'desc',
      });
    } else if (value === 'date') {
      setFilter({
        aspect: 'date',
        direction: '',
      });
    } else if (value === 'l>hsize') {
      setFilter({
        aspect: 'size',
        direction: 'inc',
      });
    } else if (value === 'h>lsize') {
      setFilter({
        aspect: 'size',
        direction: 'desc',
      });
    }
  };

  return (
    <div>
      <h3>Sort By:</h3>
      <select onChange={(e) => changeFilter(e.target.value)} ref={selectRef}>
        <option value='default' selected>
          Choose a sort filter
        </option>
        <option value='l>hprice'>Price: Low to High</option>
        <option value='h>lprice'>Price: High to Low</option>
        <option value='date'>Date Available</option>
        <option value='l>hsize'>Square Ft: Small > Large</option>
        <option value='h>lsize'>Square Ft: Large > Small</option>
      </select>
    </div>
  );
}
