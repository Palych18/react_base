import './CounterEffect.css';
import { useState, useEffect } from 'react';

/** 
 * @typedef {import('./types').CounterProps} Props
 */

/**
 * @function CounterEffect
 * @param {Props} props
 * @returns {JSX.Element}
 */

export const CounterEffect = (props) => {
  const { min, max, defaultCount } = props;
  const [ count, setCount ] = useState(defaultCount);

  const handlePlusClick = () => {
    setCount((count) => count < max ? count + 1 : count);
  };

  const handleMinusClick = () => {
    setCount((count) => count > min ? count - 1 : count);
  };  

  useEffect(() => {
    console.log('Always render');
  });

  useEffect(() => {
    console.log('One render');
  }, [count]);

  useEffect (() => {
    console.log('If change count');
  }, [count]);

  return (
    <div className="counter-effect">
      <h2 className="title">Counter: {count}</h2>
      <div className="buttons">
        <button
          className="plus"
          onClick={handlePlusClick}
        >
          +
        </button>
        <button
          className="minus"
          onClick={handleMinusClick}
        >
          -
        </button>
      </div>
    </div>
  );
};
