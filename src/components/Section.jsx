import React from 'react'

function Section({ components }) {
  return (
    components.map((component, index) => (
      <section className="container mb-5" key={"component" + index}>
        {component}
      </section>
    ))
  );
}

export default Section;
