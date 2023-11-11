export interface createAccountFormSchema {
  email: string;
  password: string;
  reapeatedPassword: string;
  isLoading: boolean;
  error: string | null;
}
