import validate from 'validate.js';

const formValidator = constraints => (
  values => (validate(values, constraints) || {})
);

export default formValidator;