/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useContext } from 'react';
import Slider from 'react-input-slider';
import { GalleryContext } from '../../../components/GalleryContext';

const API_KEY = process.env.REACT_APP_API_KEY;

export default function Forms(props) {
  const [values, setValues] = useContext(GalleryContext);
  const [state, setState] = useState({ x: 12 });

  const handleSubmit = (e) => {
    e.preventDefault();
    const func = () =>
      setValues({
        ...values,
        uri: `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
          values.query
        )}&image_type=${values.imageType}&colors=${values.colors}`,
        quantity: state.x,
      });
    func();
    props.scroll();
  };

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setValues({
        ...values,
        [name]: checked,
      });
    } else {
      setValues({ ...values, [name]: value });
    }
  }

  return (
    <div className="row d-flex justify-content-center">
      <form className="col-12 col-sm-4" onSubmit={handleSubmit}>
        <input
          className="form-control form-inline  text-center rounded-4 "
          name="query"
          value={props.query}
          type="text"
          placeholder="search..."
          onChange={handleChange}
        />{' '}
        <br />
        <br />
        <div className="">
          <p className="">results: {state.x}</p>
          <Slider
            axis="x"
            name="quantity"
            xstep={2}
            xmin={2}
            xmax={20}
            x={state.x}
            onChange={({ x }) => setState({ x })}
          />
        </div>
        <br />
        <br />
        <label>
          Color:{' '}
          <select
            className="custom-select"
            name="colors"
            value={values.colors}
            onChange={handleChange}
          >
            <option value="">All</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </select>{' '}
        </label>{' '}
        <br />
        <br />{' '}
        <div className="custom-control custom-radio">
          <input
            className="custom-control-input"
            id="customRadio1"
            name="imageType"
            value="photo"
            type="radio"
            checked={values.imageType === 'photo'}
            onChange={handleChange}
          />
          <label className="custom-control-label" htmlFor="customRadio1">
            {' '}
            Photo{' '}
          </label>{' '}
        </div>
        <br />{' '}
        <div className="custom-control custom-radio">
          <input
            className="custom-control-input"
            id="customRadio2"
            name="imageType"
            value="illustration"
            type="radio"
            checked={values.imageType === 'illustration'}
            onChange={handleChange}
          />
          <label className="custom-control-label" htmlFor="customRadio2">
            {' '}
            Illustration{' '}
          </label>
        </div>
        <br />{' '}
        <div className="custom-control custom-radio">
          <input
            className="custom-control-input"
            id="customRadio3"
            name="imageType"
            value="vector"
            type="radio"
            checked={values.imageType === 'vector'}
            onChange={handleChange}
          />
          <label className="custom-control-label" htmlFor="customRadio3">
            {' '}
            Vector{' '}
          </label>
        </div>
        <br />
        <button className="btn btn-primary" type="submit" onClick={values.func}>
          Search
        </button>
      </form>
    </div>
  );
}
