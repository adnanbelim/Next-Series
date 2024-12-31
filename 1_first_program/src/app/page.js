'use client'
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [name, setName] = useState('Adnan');

  const greet = (props) => {
    setName('Belim');
    alert('Welcome ' + props);
  }

  const InnerComponent = () => {
    return (
      <h3>I am Inner Component</h3>
    )
  }

  return (
    <div className={styles.page}>

      {/* use component */}
      <User />

      {/* Reuse component */}
      <User1 value='I am Passing value' />

      {/* State */}
      <h1>Hello {name}</h1>

      {/* Event use in component */}
      <button onClick={() => greet('Player')}>Click Me</button>

      {/* Component in component */}
      <InnerComponent />

      {/* Call component as function */}
      {InnerComponent()}

      <a href="https://www.notion.so/Next-JS-16c9a4986add80ac911fd1331630543e?pvs=4">Click Me - Notes: </a>

    </div>
  );
}

// Creation of component
const User = () => {
  return (
    <div>
      Hello I am component
    </div>
  )
}

// Pass props in component
const User1 = (props) => {
  return (
    <div>
      Hello I am Reusable component <b>{props.value}</b>
    </div>
  )
}

// Notes - https://www.notion.so/Next-JS-16c9a4986add80ac911fd1331630543e?pvs=4
