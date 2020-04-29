import React from 'react';

function Menu(props) {
  const { setBeds, setBaths, setProperty } = props.filter;

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

  const changeProperty = (target) => {
    setProperty(target.value);
  };

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
      </form>
    </div>
  );
}

export default Menu;
