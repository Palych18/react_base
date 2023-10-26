import './App.css';
import { Posts } from 'Posts';
import { Users } from 'Users';
import { Comments } from 'Comments';
import { Text } from '../Text/Text';

export const App = () => {
  return (
    <div className="App">
      <h1>App</h1>
      <Text className="text">
        Children example
      </Text>
      <div className="content">
        <Posts />
        <Users />
        <Comments />
      </div>
    </div>
  );
};
