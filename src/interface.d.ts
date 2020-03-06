interface IUserContact {
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  username: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  postcode: number;
  avatar: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

interface IApiResponse {
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: { number: number; name: string };
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
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  phone: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

interface IContactGroup {
  contacts: {
    [key: string]: IUserContact;
  };
  ids: number[];
}
