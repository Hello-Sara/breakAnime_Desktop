import React from 'react';
import './CTABouton.css';

const Bouton = ({ name, Submit }) => {
    return (
      <button className="call-to-action-button" onClick={Submit} >
        {name}
      </button>
    );
  };

export default Bouton;