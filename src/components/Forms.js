import { useState } from 'react';
//import Slider from 'react-input-slider';
//import { Button,Badge, Form, FormGroup, Label, Input, FormText } from 'reactstrap'; @todo

import { useDispatch } from 'react-redux';

import { getImages } from '../store/gallerySlice';
import ColorSelect from './ColorSelect';

/**
 * @todo
 * todo : Popular Searches
 * <Badge> popular term </Badge>
 * onClick:
 * 1. setFormData({searchData})
 * 2. handleSubmit()
 */

export default function Forms(props) {
  const [formData, setFormData] = useState({ query: '', colors: '', imageType: 'photo' });
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await dispatch(getImages(formData)).unwrap();
      props.scroll();
    } catch (err) {
      console.log(err);
    }
  };

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  }

  function handleColorChange({ value }) {
    setFormData({ ...formData, colors: value });
  }

  return (
    <div className="row d-flex justify-content-center ">
      <form
        style={{ padding: '2rem' }}
        className="col-12 col-md-6 col-lg-4"
        onSubmit={handleSubmit}
      >
        <label className="font-weight-bold">Search</label>
        <input
          className="form-control form-inline  text-center rounded-4 "
          name="query"
          value={formData.query}
          type="text"
          placeholder="search..."
          onChange={handleChange}
        />
        <br />
        <br />
        <label className="font-weight-bold">Color</label>
        <ColorSelect handleChange={handleColorChange} />
        <br />
        <br />
        <label className="font-weight-bold">Type</label>
        <div className="form-group d-flex justify-content-around">
          <div className="custom-control custom-radio">
            <input
              className="custom-control-input"
              id="customRadio1"
              name="imageType"
              value="photo"
              type="radio"
              checked={formData.imageType === 'photo'}
              onChange={handleChange}
            />
            <label className="custom-control-label" htmlFor="customRadio1">
              Photo
            </label>
          </div>
          <div className="custom-control custom-radio">
            <input
              className="custom-control-input"
              id="customRadio2"
              name="imageType"
              value="illustration"
              type="radio"
              checked={formData.imageType === 'illustration'}
              onChange={handleChange}
            />
            <label className="custom-control-label" htmlFor="customRadio2">
              Illustration
            </label>
          </div>
          <div className="custom-control custom-radio">
            <input
              className="custom-control-input"
              id="customRadio3"
              name="imageType"
              value="vector"
              type="radio"
              checked={formData.imageType === 'vector'}
              onChange={handleChange}
            />
            <label className="custom-control-label" htmlFor="customRadio3">
              Vector
            </label>
          </div>
        </div>
        <br />
        <button className="btn btn-primary" type="submit">
          <div className="d-flex justify-content-between align-items-baseline p-1">
            <div className="font-weight-bold">Search</div>
            <div>
              <i style={{ opacity: '0.8' }} className="fas fa-search fa-sm ml-2"></i>
            </div>
          </div>
        </button>
      </form>
    </div>
  );
}
