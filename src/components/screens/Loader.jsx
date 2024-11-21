import React from 'react';
import spin from '../lib/assets/Infinity@1x-1.0s-200px-200px.svg';

const Loader = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <img src={spin} alt="loading..." className='w-[200px]' />
    </div>
  );
}

export default Loader;
