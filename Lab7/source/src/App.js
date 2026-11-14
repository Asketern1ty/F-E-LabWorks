import React, { useState } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Image from './components/Image';
import GoodsCard from './components/GoodsCard';
import './App.css';

const GOODS_LIST = [
  {
    id: 1,
    name: 'Капучино',
    price: 65,
    image: process.env.PUBLIC_URL + '/cappuccino.jpg',
  },
  {
    id: 2,
    name: 'Лате',
    price: 70,
    image: process.env.PUBLIC_URL + '/latte.jpg',
  },
  {
    id: 3,
    name: 'Еспресо',
    price: 45,
    image: process.env.PUBLIC_URL + '/espresso.jpg',
  },
  {
    id: 4,
    name: 'Круасан класичний',
    price: 55,
    image: process.env.PUBLIC_URL + '/croissant.jpg',
  },
  {
    id: 5,
    name: 'Чизкейк Нью-Йорк',
    price: 95,
    image: process.env.PUBLIC_URL + '/cheesecake.jpg',
  },
  {
    id: 6,
    name: 'Пончик глазурований',
    price: 50,
    image: process.env.PUBLIC_URL + '/donut.jpg',
  },
];

function App() {
  const [activeTask, setActiveTask] = useState('task1');

  return (
    <div className="app-container">
      <nav className="task-switcher">
        <button
          className={`switch-btn ${activeTask === 'task1' ? 'active' : ''}`}
          onClick={() => setActiveTask('task1')}
        >
          Завдання 1
        </button>
        <button
          className={`switch-btn ${activeTask === 'task2' ? 'active' : ''}`}
          onClick={() => setActiveTask('task2')}
        >
          Завдання 2
        </button>
      </nav>

      {activeTask === 'task1' ? (
        <section className="task-section">
          <Header />
          <Content />
          <Image />
        </section>
      ) : (
        <section className="task-section">
          <h2>Галерея товарів</h2>
          <div className="goods-grid">
            {GOODS_LIST.map((item) => (
              <GoodsCard
                key={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default App;