import React, { useState, useEffect } from 'react';

export default function Comp() {
  const [count, setCount] = useState(0);

  //v1
  useEffect(() => {
    console.log('render');
  });
  //v2
  useEffect(() => {
    console.log('run only once after render');
  }, []);
  //v3
  useEffect(() => {
    console.log('run when dependency arrays changes');
  }, [count]);
  //v4
  useEffect(() => {
    return () => {
      console.log('unmount');
    };
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
