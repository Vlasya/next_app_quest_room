import { User } from '@/types';

export interface FormType {
  name: string;
  phone: string;
  peopleCount: number;
  isLegal: boolean;
}

export interface SignUpFormType extends User {
  passwordConfirmation: string;
}


export interface SignInFormType {
  email: string;
  password: string;
}
