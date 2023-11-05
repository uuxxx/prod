export interface UserCredentials {
  email: string | null;
  displayName: string | null;
  emailVerified: boolean;
  createdAt?: string;
  lastSignInTime?: string;
  photoURL: string | null;
  uid: string;
}

export type UserSchema = UserCredentials | null;
