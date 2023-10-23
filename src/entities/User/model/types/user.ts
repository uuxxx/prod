export interface UserCredentials {
  email: string | null;
  displayName: string | null;
  emailVerified: boolean;
  createdAt?: string;
  lastSignInTime?: string;
  photoURL: null | string;
}

export type User = UserCredentials | null;
