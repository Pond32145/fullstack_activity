// import React from 'react';

const BoxAnimation = () => {
  return (
    <div className="loader w-200 h-320 relative transform transform-style-preserve-3d md:zoom-44">
      {[...Array(8)].map((_, index) => (
        <div key={index} className={`box box${index} absolute transform translate--${positionX[index]}--${positionY[index]} left-${left[index]} top-${top[index]}`}>
          <div className="box-div before"></div>
          <div className="box-div after"></div>
        </div>
      ))}
    </div>
  );
};

const positionX = ['-220', '-260', '120', '280', '60', '-220', '-260', '-240'];
const positionY = ['-120', '120', '-190', '-40', '200', '-120', '120', '200'];
const left = ['58', '25', '58', '91', '58', '25', '91', '58'];
const top = ['108', '120', '64', '120', '132', '76', '76', '87'];

export default BoxAnimation;
