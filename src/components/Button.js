import React from 'react';

const Button = ({ onClick, children, color, className, isLoading }) => (
  <button
    type="button"
    className={`btn ${color} ${className}`}
    onClick={onClick}
    onKeyPress={onClick}
    disabled={isLoading}
  >
    {isLoading ? (
      <div className="spinner-border" role="status" />
    ) : (
      <>{children}</>
    )}
  </button>
);

Button.defaultProps = {
  color: 'primary',
  className: '',
};

export default Button;
