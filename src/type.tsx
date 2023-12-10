export interface IMovie {
  user_id: string;
  image: string;
  title: string;
  story?: string;
  language?: string;
  year: number | undefined;
}

export interface IUserData {
  firstName?: string;
  lastName?: string;
  userName?: string;
  email: string;
  password: string;
}

export interface IShowError {
  action: string;
  msg: string;
}
