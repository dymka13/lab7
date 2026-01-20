import React from 'react';
import Header from './Header';
import Content from './Content';
import Image from './Image';
import GoodsCard from './GoodsCard';
import './App.css';

function App() {
  const products = [
  { id: 1, name: "Яблуко", price: 30, img: "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg" },
  { id: 2, name: "Банан", price: 60, img: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg" },
  { id: 3, name: "Апельсин", price: 80, img: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg" },
  { id: 4, name: "Ківі", price: 120, img: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Kiwi_fruit_assets.jpg" },
  { id: 5, name: "Манго", price: 150, img: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Mango_Died.jpg" },
  { id: 6, name: "Груша", price: 45, img: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Pears.jpg" },
];

  return (
    <div className="App">
      <Header />
      <Content />
      <Image />

      <hr />
      <h3>Галерея товарів</h3>
      <div className="gallery">
        {products.map(product => (
          <GoodsCard 
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.img}
          />
        ))}
      </div>
    </div>
  );
}

export default App;