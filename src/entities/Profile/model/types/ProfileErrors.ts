export enum ProfileErrors {
  INVALID_NAME = 'Неправильно введено имя',
  INVALID_SURNAME = 'Неправильно введена фамилия',
  INVALID_AGE = 'Неправильно введен возраст',
  INVALID_COUNTRY = 'Неправильно введена страна',
  INVALID_CURRENCY = 'Неправильно введена валюта',
  INVALID_CITY = 'Неправильно введен город',
  SERVER_ERROR = 'Ошибка сервера',
  UNEXPECTED_ERROR = 'Что-то пошло не так',
  NO_AUTHORIZED_USER = 'Пользователь не авторизован',
  UNABLE_TO_RETRIEVE_PROFILE_DATA = 'Не получается взять данные из профиля пользователя',
  USER_NOT_FOUND = 'Пользователь не найден',
}

export class ProfileError {
  constructor(private msg: ProfileErrors) {}

  public get message() {
    return this.msg;
  }
}
