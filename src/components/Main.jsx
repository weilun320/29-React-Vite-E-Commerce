import React from 'react'
import Carousel from './Carousel';
import Card from './Card';

const newDrop = (
  <Carousel
    title={"New Drop"}
    items={[
      {
        image: "../public/assets/new-drop-1.jpg",
        name: "Lorem ipsum dolor sit amet",
        description: "Harum laborum ipsa labore recusandae eveniet aspernatur obcaecati dolores!"
      },
      {
        image: "../public/assets/new-drop-2.jpg",
        name: "Lorem ipsum dolor sit amet",
        description: "Harum laborum ipsa labore recusandae eveniet aspernatur obcaecati dolores!"
      },
      {
        image: "../public/assets/new-drop-3.jpg",
        name: "Lorem ipsum dolor sit amet",
        description: "Harum laborum ipsa labore recusandae eveniet aspernatur obcaecati dolores!"
      },
      {
        image: "../public/assets/new-drop-4.jpg",
        name: "Lorem ipsum dolor sit amet",
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
)

const components = [
  newDrop,
  valueBuy
];

function Section({ components }) {
  return (
    components.map((component, index) => (
      <section className="container mb-5" key={"component" + index}>
        {component}
      </section>
    ))
  );
}

function Main() {
  return (
    <main className="p-3 py-5 p-lg-5">
      <Section components={components} />
    </main>
  );
}

export default Main;
