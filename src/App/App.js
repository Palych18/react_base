import './App.css';
import { Posts } from '../Posts';
import { Users } from 'Users';

export const App = () => {
  return (
    <div className="App">
      <h1>App</h1>
      <div className="content">
        <Posts />
        <Users />
      </div>      
    </div>
  );
};
