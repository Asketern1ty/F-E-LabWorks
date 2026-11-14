import React from 'react';

function GoodsCard({ image, name, price }) {
  return (
    <div className="goods-card">
      <img src={image} alt={name} className="goods-image" />
      <h4 className="goods-title">{name}</h4>
      <p className="goods-price">Ціна: {price} грн</p>
    </div>
  );
}

export default GoodsCard;