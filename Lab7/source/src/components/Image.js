import React, { useState } from 'react';

const KYIV_IMAGE = process.env.PUBLIC_URL + '/kyiv.jpg';

function Image() {
  const [images, setImages] = useState([{ id: 1, width: 500 }]);

  const handleAdd = () => {
    setImages((prev) => [...prev, { id: Date.now(), width: 500 }]);
  };

  const handleZoomIn = () => {
    setImages((prev) =>
      prev.map((img, idx) =>
        idx === prev.length - 1 ? { ...img, width: img.width + 50 } : img
      )
    );
  };

  const handleZoomOut = () => {
    setImages((prev) =>
      prev.map((img, idx) =>
        idx === prev.length - 1
          ? { ...img, width: Math.max(img.width - 50, 100) }
          : img
      )
    );
  };

  const handleDelete = () => {
    setImages((prev) => prev.slice(0, -1));
  };

  return (
    <div className="image-section">
      <div>
        {images.map((img) => (
          <div key={img.id} style={{ marginBottom: '10px' }}>
            <a
              href="https://kyivcity.gov.ua/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={KYIV_IMAGE}
                alt="Київ"
                style={{ width: `${img.width}px`, maxWidth: '100%' }}
              />
            </a>
          </div>
        ))}
      </div>

      <div className="controls">
        <button onClick={handleAdd}>Додати</button>
        <button onClick={handleZoomIn} disabled={images.length === 0}>
          Збільшити
        </button>
        <button onClick={handleZoomOut} disabled={images.length === 0}>
          Зменшити
        </button>
        <button onClick={handleDelete} disabled={images.length === 0}>
          Видалити
        </button>
      </div>
    </div>
  );
}

export default Image;