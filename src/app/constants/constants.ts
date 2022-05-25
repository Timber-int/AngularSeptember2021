export const CONSTANTS = {
  PASSWORD_REGEXP: new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{2,10})'),
  PHONE_REGEXP: new RegExp('^(\\s*)?(\\+)?([- _():=+]?\\d[- _():=+]?){10,14}(\\s*)?$'),
  NAME_REGEX: new RegExp(/^(([a-zA-Z-]{2,20})|([а-яА-ЯЁёІіЇїҐґЄє-]{2,20}))$/u),
};
