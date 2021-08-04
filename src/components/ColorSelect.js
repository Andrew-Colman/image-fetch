import React from 'react';
import chroma from 'chroma-js';

import Select from 'react-select';

const colourOptions = [
  { value: 'all', label: 'All', color: '#708090' },
  { value: 'grayscale', label: 'Grayscale', color: 'gray' },
  { value: 'transparent', label: 'Transparent', color: '#aabbccaa' },
  { value: 'red', label: 'Red', color: '#FF5630' },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'turquoise', label: 'Turquoise', color: 'turquoise' },
  { value: 'blue', label: 'Blue', color: '#0052CC' },
  { value: 'lilac', label: 'Lilac', color: '#c8a2c8' },
  { value: 'pink', label: 'Pink', color: 'pink' },
  { value: 'white', label: 'White', color: 'gainsboro' },
  { value: 'gray', label: 'Gray', color: '#666666' },
  { value: 'black', label: 'Black', color: '#111' },
  { value: 'brown', label: 'Brown', color: 'brown' },
];

const dot = (color = '#ccc') => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: 'block',
    marginRight: 8,
    height: 10,
    width: 10,
  },
});

const colourStyles = {
  control: (styles) => ({ ...styles, backgroundColor: 'white' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : null,
      color: isDisabled
        ? '#ccc'
        : isSelected
        ? chroma.contrast(color, 'white') > 2
          ? 'white'
          : 'black'
        : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
      },
    };
  },
  input: (styles) => ({ ...styles, ...dot() }),
  placeholder: (styles) => ({ ...styles, ...dot() }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
};

export default function ColorSelect({ handleChange }) {
  return (
    <Select
      defaultValue={colourOptions[0]}
      label="Single select"
      options={colourOptions}
      styles={colourStyles}
      onChange={handleChange}
    />
  );
}
