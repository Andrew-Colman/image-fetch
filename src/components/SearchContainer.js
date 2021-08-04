import React from 'react';

export default function SearchContainer({ children }) {
  return (
    <div className="row mt-2">
      <div id="search" className="col bg-dark text-center text-white">
        {children}
        <hr />
      </div>
    </div>
  );
}
