export interface FormType {
  name: string;
  phone: string;
  peopleCount: number;
  isLegal: boolean;
}

export interface SignUpFormType {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export interface SignInFormType {
  email: string;
  password: string;
}
