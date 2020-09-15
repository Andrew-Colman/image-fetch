import React from 'react';

export default function ImageInfo({ Author, Downloads }) {
  return (
    <>
      <small>
        Author:
        <strong> {Author} </strong>
      </small>
      <p className="fa-sm font-weight-light">Downloads: {Downloads}</p>
    </>
  );
}
