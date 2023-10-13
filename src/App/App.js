import './App.css';
import { Counter } from '../Counter';

export const App = () => {
  return (
    <div className="App">
      <h1>App</h1>
      <Counter
        min={10}
        max={30}
        defaultCount={20}
      />
    </div>
  );
};
