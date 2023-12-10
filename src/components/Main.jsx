import React from 'react'
import Carousel from './Carousel';
import Card from './Card';
import Section from './Section';

const hotItem = (
  <Card
    title={"Don't Miss It!"}
    items={[
      {
        image: "../public/assets/hot-item-1.jpg",
        name: "Lorem ipsum",
        description: "Harum laborum ipsa labore recusandae eveniet aspernatur obcaecati dolores!",
        price: 160,
        discount: 0
      },
      {
        image: "../public/assets/hot-item-2.jpg",
        name: "Lorem ipsum",
        description: "Harum laborum ipsa labore recusandae eveniet aspernatur obcaecati dolores!",
        price: 110,
        discount: 0
      },
      {
        image: "../public/assets/hot-item-3.jpg",
        name: "Lorem ipsum",
        description: "Harum laborum ipsa labore recusandae eveniet aspernatur obcaecati dolores!",
        price: 180,
        discount: 0
      },
    ]}
  />
);

const newDrop = (
  <Carousel
    title={"New Drop"}
    items={[
      {
        image: "../public/assets/new-drop-1.jpg",
        name: "Lorem ipsum",
        description: "Harum laborum ipsa labore recusandae eveniet aspernatur obcaecati dolores!"
      },
      {
        image: "../public/assets/new-drop-2.jpg",
        name: "Lorem ipsum",
        description: "Harum laborum ipsa labore recusandae eveniet aspernatur obcaecati dolores!"
      },
      {
        image: "../public/assets/new-drop-3.jpg",
        name: "Lorem ipsum",
        description: "Harum laborum ipsa labore recusandae eveniet aspernatur obcaecati dolores!"
      },
      {
        image: "../public/assets/new-drop-4.jpg",
        name: "Lorem ipsum",
        description: "Harum laborum ipsa labore recusandae eveniet aspernatur obcaecati dolores!"
      },
    ]}
  />
);

const valueBuy = (
  <Card
    title={"Value Buy"}
    items={[
      {
        image: "../public/assets/value-buy-1.jpg",
        name: "Lorem ipsum",
        description: "Harum laborum ipsa labore recusandae eveniet aspernatur obcaecati dolores!",
        price: 60,
        discount: 20
      },
      {
        image: "../public/assets/value-buy-2.jpg",
        name: "Lorem ipsum",
        description: "Harum laborum ipsa labore recusandae eveniet aspernatur obcaecati dolores!",
        price: 150,
        discount: 20
      },
      {
        image: "../public/assets/value-buy-3.jpg",
        name: "Lorem ipsum",
        description: "Harum laborum ipsa labore recusandae eveniet aspernatur obcaecati dolores!",
        price: 90,
        discount: 20
      },
    ]}
  />
);

const components = [
  hotItem,
  newDrop,
  valueBuy
];

function Main() {
  return (
    <main className="px-3 py-5 px-lg-5">
      <Section components={components} />
    </main>
  );
}

export default Main;
