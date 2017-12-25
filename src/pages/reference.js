import React, { Component } from 'react'
import Link from 'gatsby-link'

const references = {
  primitives: [
    'Cube',
    'Cylinder',
    'GeodesicSphere',
    'Polyhedron',
    'Sphere',
    'Torus',
  ],
  modifiers: [
    'Center',
    'Difference',
    'Mirror',
    'Rotate',
    'Scale',
    'Translate',
    'Union',
  ],
}

export class ReferenceOverviewPage extends Component {
  render() {
    return (
      <div>
      <h2>Geometric primtives</h2>
      <p><b>Geometric primtives</b> are basic building blocks that can be combined with <b>modifieres</b> to create more complex objects.</p>
      { references.primitives.map((primitive) => (
        <div>
        <Link
          to={`/reference/components/${primitive}`}
        >
          {primitive}
        </Link>
        </div>
      )) }
      <br/>
      <br/>
      <h2>Modifiers</h2>
      <p><b>Modifiers</b> allow you to create new objects from <b>geometric primtives</b> by either modifying attributes of a single object (e.g. Rotate, Scale, Mirror) or doing operations over multiple objects (e.g. Union, Difference).</p>
      { references.modifiers.map((modifier) => (
        <div>
        <Link
          to={`/reference/components/${modifier}`}
        >
          {modifier}
        </Link>
        </div>
      )) }
      </div>
    );
  }
}

export default ReferenceOverviewPage;
