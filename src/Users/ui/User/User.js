import './User.css';

/** @typedef {import('./types').UserProps} UserProps */

/**
 * @function User
 * @param {UserProps} props
 * @returns {JSX.Element}
 */

export const User = ({className, details}) => {
  const address = details.address
    ? `${details.address.city} ${details.address.street}`
    : '';

  const classNames = className
    ? `user ${className}`
    : 'user';

  return (
    <div className={classNames}>
      <p className="user_copy"><b>Name:</b> {details.firstname}</p>
      <p className="user_copy"><b>Surname:</b> {details.lastname}</p>
      <p className="user_copy"><b>Email:</b> {details.email}</p>
      <p className="user_copy"><b>Birth date:</b> {details.birthDate}</p>
      <p className="user_copy"><b>Address:</b> {address}</p>
      <p className="user_copy"><b>Phone:</b> {details.phone}</p>
      <p className="user_copy"><b>Website:</b> {details.website}</p>
    </div>
  );
};
