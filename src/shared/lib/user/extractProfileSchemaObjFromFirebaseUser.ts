import { UserCredentials } from '@/entities/User';
import { User } from 'firebase/auth';

export function extractProfileSchemaObjFromUserCredentials(user: User): UserCredentials {
  return {
    email: user.email,
    displayName: user.displayName,
    emailVerified: user.emailVerified,
    createdAt: user.metadata.creationTime,
    lastSignInTime: user.metadata.lastSignInTime,
    photoURL: user.photoURL,
    uid: user.uid,
  };
}
