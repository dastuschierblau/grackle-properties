import React from 'react';
import { data } from '../data/apartments';

function Menu(props) {
  const { units, setUnits } = props.filter;
  const { setLoading } = props.loading;

  const [beds, setBeds] = React.useState([]);
  const [baths, setBaths] = React.useState([]);
  const [property, setProperty] = React.useState('All');

  const [toggle, setToggle] = React.useState(false);

  const toggleMenu = () => {
    setToggle((prev) => {
      return !prev;
    });
  };

  const changeBeds = (target) => {
    if (!target.checked) {
      setBeds((prev) => {
        return prev.filter((item) => item !== target.value);
      });
    } else {
      setBeds((prev) => {
        return prev.concat([target.value]);
      });
    }
  };

  const changeBaths = (target) => {
    if (!target.checked) {
      setBaths((prev) => {
        return prev.filter((item) => item !== target.value);
      });
    } else {
      setBaths((prev) => {
        return prev.concat([target.value]);
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    setUnits((prev) => {
      return data
        .filter((item) => {
          if (baths.length > 0) {
            return baths.includes(item.bathrooms.toString());
          } else {
            return true;
          }
        })
        .filter((item) => {
          if (beds.length > 0) {
            return beds.includes(item.bedrooms.toString());
          } else {
            return true;
          }
        })
        .filter((item) => {
          if (property === 'All') return true;
          return item.property.toString() === property;
        });
    });
  };

  const changeProperty = (target) => {
    setProperty(target.value);
  };

  React.useEffect(() => {
    setToggle(false);
  }, [units]);

  return (
    <div className='col menu relative'>
      <h2 className='text-center'>Grackle Properties</h2>
      <h4 className='text-center'>Search for a unit:</h4>

      <div className='d-flex menu-button'>
        <div onClick={() => toggleMenu()} className={`toggle-${toggle}`}>
          <div className='bar1'></div>
          <div className='bar2'></div>
          <div className='bar3'></div>
        </div>
      </div>

      <form className={`toggle-collapse open-${toggle}`}>
        <div className='form-category'>
          <label>Bedrooms:</label>
          <span className='form-inputs'>
            <div className='form-group'>
              <label className='checkbox-container'>
                <input
                  type='checkbox'
                  value='0'
                  onClick={(e) => changeBeds(e.target)}
                />
                <span className='checkbox-custom'></span>
              </label>
              <div className='label'>Studio</div>
            </div>
            <div className='form-group'>
              <label className='checkbox-container'>
                <input
                  type='checkbox'
                  value='1'
                  onClick={(e) => changeBeds(e.target)}
                />
                <span className='checkbox-custom'></span>
              </label>
              <div className='label'>1</div>
            </div>
            <div className='form-group'>
              <label className='checkbox-container'>
                <input
                  type='checkbox'
                  value='2'
                  onClick={(e) => changeBeds(e.target)}
                />
                <span className='checkbox-custom'></span>
              </label>
              <div className='label'>2</div>
            </div>
            <div className='form-group'>
              <label className='checkbox-container'>
                <input
                  type='checkbox'
                  value='3'
                  onClick={(e) => changeBeds(e.target)}
                />
                <span className='checkbox-custom'></span>
              </label>
              <div className='label'>3</div>
            </div>
          </span>
        </div>

        <div className='form-category'>
          <label>Bathrooms:</label>
          <div className='form-group'>
            <label className='checkbox-container'>
              <input
                type='checkbox'
                value='1'
                onClick={(e) => changeBaths(e.target)}
              />
              <span className='checkbox-custom'></span>
            </label>
            <div className='label'>1</div>
          </div>
          <div className='form-group'>
            <label className='checkbox-container'>
              <input
                type='checkbox'
                value='2'
                onClick={(e) => changeBaths(e.target)}
              />
              <span className='checkbox-custom'></span>
            </label>
            <div className='label'>2</div>
          </div>
        </div>

        <div className='form-category'>
          <label>Property:</label>
          <div className='form-group'>
            <select onChange={(e) => changeProperty(e.target)}>
              <option default value='All'>
                All
              </option>
              <option value='1'>Quaker Apartments</option>
              <option value='2'>The Mockingbird</option>
              <option value='3'>Rock Dove Apartments</option>
              <option value='4'>The Night Heron</option>
            </select>
          </div>
        </div>

        <button
          className='btn btn-yellow d-flex'
          disabled={
            beds.length === 0 && baths.length === 0 && property === 'All'
          }
          onClick={(e) => handleSubmit(e)}
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Menu;
