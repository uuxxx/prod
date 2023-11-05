import { Profile } from '../../types/Profile';
import { ProfileErrors } from '../../types/ProfileErrors';

export function validateProfile(profile: Profile) {
  const { age, name, surname, country, currency } = profile;

  if (!age || isNaN(Number(age))) {
    throw new Error(ProfileErrors.INVALID_AGE);
  }

  if (!name) {
    throw new Error(ProfileErrors.INVALID_NAME);
  }

  if (!surname) {
    throw new Error(ProfileErrors.INVALID_SURNAME);
  }

  if (!country) {
    throw new Error(ProfileErrors.INVALID_COUNTRY);
  }

  if (!currency) {
    throw new Error(ProfileErrors.INVALID_CURRENCY);
  }
}
