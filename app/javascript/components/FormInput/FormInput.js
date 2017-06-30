import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';

const FormInput = ({title, name, value, onChange, type = 'input', classNames = 'col-sm-12', ownRow = true}) => {
  let innerHtml = (
    <div className={`form-group ${classNames}`}>
      <label>{title}</label>
      <Input name={name} value={value} onChange={onChange} type={type} rows={type == 'textarea' ? 7 : 1}/>
    </div>
  );

  if (ownRow)
    return (
      <div className="row">
        {innerHtml}
      </div>);
  else
    return innerHtml;
};

FormInput.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  classNames: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  ownRow: PropTypes.bool
};

export default FormInput;