import { Country } from '@/shared/constants/country';
import { Currency } from '@/shared/constants/currency';
import { Profile } from '../../types/Profile';
import { ProfileErrors } from '../../types/ProfileErrors';
import { validateProfile } from './profileValidation';

describe('validateProfile', () => {
  const initialProfile: Profile = {
    name: 'TestName',
    surname: 'TestSurname',
    age: '20',
    city: 'TestCity',
    country: Country.Russia,
    currency: Currency.RUB,
  };

  let testProfile: Profile;

  beforeEach(() => {
    testProfile = { ...initialProfile };
  });

  it('INVALID_AGE', () => {
    testProfile.age = '23t';
    expect(() => validateProfile(testProfile)).toThrow(ProfileErrors.INVALID_AGE);

    testProfile.age = '';
    expect(() => validateProfile(testProfile)).toThrow(ProfileErrors.INVALID_AGE);
  });
  it('INVALID_NAME', () => {
    testProfile.name = '';
    expect(() => validateProfile(testProfile)).toThrow(ProfileErrors.INVALID_NAME);
  });
  it('INVALID_SURNAME', () => {
    testProfile.surname = '';
    expect(() => validateProfile(testProfile)).toThrow(ProfileErrors.INVALID_SURNAME);
  });
  it('INVALID_COUNTRY', () => {
    testProfile.country = '' as Country;
    expect(() => validateProfile(testProfile)).toThrow(ProfileErrors.INVALID_COUNTRY);
  });
  it('INVALID_CURRENCY', () => {
    testProfile.currency = '' as Currency;
    expect(() => validateProfile(testProfile)).toThrow(ProfileErrors.INVALID_CURRENCY);
  });

  it('correct form passes validation', () => {
    validateProfile(testProfile);
  });
});
