import { createAccountFormError } from '../../types/createAccountFormErrors';
import { createAccountFormSchema } from '../../types/createAccountFormSchema';

export function validateCreateAccountForm(
    form: createAccountFormSchema | undefined,
): asserts form is createAccountFormSchema {
  if (!form) {
    throw new Error(createAccountFormError.UNABLE_TO_RETRIEVE_CREATE_ACCOUNT_FORM_DATA);
  }

  const { email, password, reapeatedPassword } = form;

  if (!email) {
    throw new Error(createAccountFormError.INCORRECT_EMAIL);
  }

  if (!password) {
    throw new Error(createAccountFormError.INCORRECT_PASSWORD);
  }

  if (password !== reapeatedPassword) {
    throw new Error(createAccountFormError.PASSWORDS_DONT_MATCH);
  }
}
