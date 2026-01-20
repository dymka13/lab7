import React from 'react';

function GoodsCard({ image, name, price }) {
  return (
    <div className="goods-card">
      <img src={image} alt={name} style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
      <h4>{name}</h4>
      <p>Ціна: {price} грн</p>
    </div>
  );
}

export default GoodsCard;