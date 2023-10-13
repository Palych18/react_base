import './Counter.css';
import { useState } from 'react';

/** 
 * @typedef {import('./types').CounterProps} Props
 */

/**
 * @function Counter
 * @param {Props} props
 * @returns {JSX.Element}
 */

export const Counter = (props) => {
  const { min, max, defaultCount } = props;
  const [ count, setCount ] = useState(defaultCount);

  const handlePlusClick = () => {
    setCount((count) => count < max ? count + 1 : count);
  };

  const handleMinusClick = () => {
    setCount((count) => count > min ? count - 1 : count);
  };

  return (
    <div className="counter">
      <h2 className="title">
        Counter: {count}
      </h2>
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
