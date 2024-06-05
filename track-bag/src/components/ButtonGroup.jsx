import React from 'react';

export default function ButtonGroup() {
  return (
    <section className='button-group'>
      <button className='btn'>Mark all as Completed</button>
      <button className='btn'>Mark all as incompleted</button>
      <button className='btn'>Reset to initial</button>
      <button className='btn'>Remove all Items</button>
    </section>
  );
}
