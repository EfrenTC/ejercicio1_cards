import React from 'react';
import './Boton.css';

const Boton = ({ texto, onClick }) => {
  return (
    <button className='boton' onClick={onClick}>
      {texto}
    </button>
  );
};

export default Boton;
