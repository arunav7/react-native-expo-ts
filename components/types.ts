export type Name = {
  title: string;
  first: string;
  last: string;
};

export type Image = {
  large: string;
  medium: string;
  thumbnail: string;
};

export type ID = {
  name: string;
  value: string;
};

export type Login = {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
};

export type Location = {
  street: {
    number: number;
    name: string;
  };
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  timezone: {
    offset: string;
    description: string;
  };
};

export type UserType = {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  login: Login;
  dob: {
    date: Date | string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: ID;
  picture: Image;
  nat: string;
};

export type Info = {
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
};

export type FetchDataType = {
  results: UserType[];
  info: Info;
};

export type AlbumType = {
  albumId: number | string;
  id: number | string;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type ProductsScreen = {
  title: string;
};
