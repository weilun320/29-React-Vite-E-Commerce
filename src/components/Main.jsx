import React from 'react'
import Carousel from './Carousel';

const newDrop = {
  title: "New Drop",
  items: [
    {
      src: "../public/assets/new-drop-1.jpg",
      name: "Lorem ipsum dolor sit amet",
      description: "Harum laborum ipsa labore recusandae eveniet aspernatur obcaecati dolores!"
    },
    {
      src: "../public/assets/new-drop-2.jpg",
      name: "Lorem ipsum dolor sit amet",
      description: "Harum laborum ipsa labore recusandae eveniet aspernatur obcaecati dolores!"
    },
    {
      src: "../public/assets/new-drop-3.jpg",
      name: "Lorem ipsum dolor sit amet",
      description: "Harum laborum ipsa labore recusandae eveniet aspernatur obcaecati dolores!"
    },
    {
      src: "../public/assets/new-drop-4.jpg",
      name: "Lorem ipsum dolor sit amet",
      description: "Harum laborum ipsa labore recusandae eveniet aspernatur obcaecati dolores!"
    },
  ]
};

function Main() {
  return (
    <main className="p-3 py-5 p-lg-5">
      <Carousel carouselInfo={newDrop} />
    </main>
  );
}

export default Main;
