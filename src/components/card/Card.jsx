import React, { useState } from 'react';
import './Card.css';

const Card = ({ title, description, image, bgColor, onClick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="card" style={{ backgroundColor: bgColor || '#fff' }}>
        <img
          src={image}
          alt={title}
          className="card-image"
          onClick={openModal}
          style={{ cursor: 'zoom-in' }}
        />
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={onClick}>Haz clic aquí</button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="modal-close" onClick={closeModal}>&times;</span>
            <img src={image} alt={title} className="modal-image" />
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
