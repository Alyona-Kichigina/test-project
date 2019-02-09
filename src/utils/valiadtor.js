// импортирум класс Validator
import Validator from 'validatorjs'

const messages = {
  required: 'Поле обязательно к заполнению',
  url: 'Введите адресс в формате http://example.com'
}

export function getValidation (values, rules, options = {}) {
  // если не передается функция onFail или onSuccess, то по умолчанию в ней будет null
  const { onFail = () => null, onSuccess = () => null } = options

  const validation = new Validator(values, rules, messages)

  // вызываем функцию класса
  // если валидация не прошла
  if (validation.fails()) {
    // вызываем функцию и в нее передаем ошибку
    onFail(validation.errors.all())
  } else {
    // вызываем эту функцию если валидация прошла успешно
    onSuccess(values)
    return {}
  }
}
