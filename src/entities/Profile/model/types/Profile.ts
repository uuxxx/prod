import { UserCredentials } from '@/entities/User';
import { Country } from '@/shared/constants/country';
import { Currency } from '@/shared/constants/currency';

export interface Profile extends Partial<UserCredentials> {
  name?: string;
  surname?: string;
  age?: string;
  city?: string;
  country?: Country;
  currency?: Currency;
}
