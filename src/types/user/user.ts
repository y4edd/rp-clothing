export type FormProps = {
  name: string;
  email: string;
  year: number;
  month: number;
  day: number;
  birthday: Date;
  password: string;
  confirmPassword: string;
};

export type LoginProps = {
  email: string;
  password: string;
};
