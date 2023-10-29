import { UserSchema } from '@/entities/User';
import { Country } from '@/shared/constants/country';
import { Currency } from '@/shared/constants/currency';

export type ProfileSchema = {
  name: string | null;
  surname: string | null;
  country: Country | null;
  currency: Currency | null;
  isLoading: boolean;
  error: string | null;
  readonly: boolean;
} & UserSchema;
