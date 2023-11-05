import { Profile } from './Profile';
import { ProfileErrors } from './ProfileErrors';

export type ProfileSchema = {
  isLoading: boolean;
  error: ProfileErrors | null;
  readonly: boolean;
  initialData: Profile;
  formData: Profile;
};
