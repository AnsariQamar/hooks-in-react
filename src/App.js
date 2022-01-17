import React, { useState, useEffect } from 'react';
import './style.css';
import Comp from './Comp';
export default function App() {
  const [flag, setFlag] = useState(true);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={() => setFlag(!flag)}>Switch</button>
      {flag && <Comp />}
    </div>
  );
}
