export type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
};

export type UserDetails = {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  birthDate: string;
  address: Address;
  phone: string;
  website: string;
};

export type UsersProps = {
  className?: string;
};
