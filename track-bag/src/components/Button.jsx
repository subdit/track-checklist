import React from 'react';

// Created reusable Button form

export default function Button({ type, children }) {
  return (
    <button className={`btn ${type === 'secondary' ? 'btn--secondary' : ''}`}>
      {children}
    </button>
  );
}
