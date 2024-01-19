import React from 'react';
import Dash_activity from '../components/Dash_activity';
import ListActivity from '../components/ListActivity';
import Popup from '../components/Popup_addAc';

function Activity() {
  return (
    <div className='container mx-auto px-8 sm:px-10 md:px-10 lg:px-20 mb-5 md:grid md:grid-cols-1 lg:grid-cols-1'>

      <div className='flex flex-col md:flex-row justify-between items-center mb-3'>
        <h2 className='text-xl font-bold mb-4 md:mb-5 md:mr-4 md:text-center'>จัดการกิจกรรม</h2>
        <Popup />
      </div>

      <div className='flex flex-col md:flex-row'>
        <div className='w-full md:w-3/12 mb-4 md:mb-0 md:mr-4'><Dash_activity /></div>
        <div className='w-full md:w-9/12'><ListActivity /></div>
      </div>
    </div>
  );
}

export default Activity;
