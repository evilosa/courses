import React from 'react';

const IconField = props => {
  const {input, label, type, meta: {touched, error}} = props;
  const errorMessage = (touched && error) ? <span>{error}</span> : null

  return (
    <div className="input-group mb-1">
      <span className="input-group-addon"><i className="icon-user"></i></span>
      <input {...input} type={type} className="form-control" placeholder={label}/>
      {errorMessage}
    </div>
  );
};

export default IconField;