import './Users.css';
import { User } from './ui/User';
import { useState, useEffect } from 'react';

/**
 * @typedef {import('./types').UsersProps} UsersProps
 * @typedef {import('./types').UserDetails} UserDetails
 */

/**
 * @function Users
 * @param {UsersProps} props
 * @returns {JSX.Element}
 */

export const Users = ({ className }) => {
  /** @type {[UserDetails[] | [], Function]} */
  const [users, setUsers] = useState([]);

  const classNames = className
    ? `users ${className}`
    : 'users';

  useEffect(() => {
    (async () => {
      const response = await fetch('https://jsonplaceholder.org/users');
      const users = await response.json();
      setUsers(users);
    })();
  }, []);

  return (
    <div className={classNames}>
      <h2 className="users-title">Users</h2>
      {users.map((user) => (
        <User className="users-user"
          key={user.id}
          details={user}
        />
      ))}
    </div>
  );
};
