import React, { useState } from 'react';

function Image() {
  const [isVisible, setIsVisible] = useState(true);
  const [width, setWidth] = useState(500);

  const addImage = () => setIsVisible(true);
  const removeImage = () => setIsVisible(false);
  const increaseImage = () => setWidth(prev => prev + 50);
  const decreaseImage = () => setWidth(prev => (prev > 50 ? prev - 50 : prev));

  return (
    <div>
      <div id="image-container">
        {isVisible && (
          <a href="https://lublin.eu" target="_blank" rel="noreferrer">
            <img 
              src="https://ukraine-is.com/wp-content/uploads/2018/10/lublin.jpg"
              alt="Місто Люблін" 
              style={{ width: `${width}px` }} 
            />
          </a>
        )}
      </div>

      <div className="buttons">
        <button onClick={addImage}>Додати</button>
        <button onClick={increaseImage}>Збільшити</button>
        <button onClick={decreaseImage}>Зменшити</button>
        <button onClick={removeImage}>Видалити</button>
      </div>
    </div>
  );
}

export default Image;