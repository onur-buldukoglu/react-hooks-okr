export const initializeStateExample = `
  import { useState } from 'react';
  
  function MyComponent() {
    const [age, setAge] = useState(23);
    const [name, setName] = useState('Max');

    // ...
  }
  `;

export const setStateFunctionExample = `
  function Counter() {
    const [count, setCount] = useState(0);

    function handleCountSet(newCount) {
      setCount(newCount);
    }

    function handleCountIncrement() {
      setCount(previousCount => previousCount + 1);
    }

    // ...
  }
  `;

export const updatingObjectExample = `
    // mutating the existing object should be avoided
    user.name = 'Max'

    // instead it should be replaced with a new object
    setUser({
      ...user,
      name: 'Max'
    });
  `;
