export interface User {
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  location: {
    city: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}


export interface ToDo {
  id: number;
  title: string;
  description: string;
  completed?: boolean;
  priority: string;
}