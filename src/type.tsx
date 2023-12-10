export interface IMovie {
  user_id: string;
  image: string;
  title: string;
  story?: string;
  language?: string;
  year: number | undefined;
}

export interface IShowError {
  action: string;
  msg: string;
}
