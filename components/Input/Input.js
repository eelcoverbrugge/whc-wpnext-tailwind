export const Input = ({ label, inputId, ...otherProps }) => {
  return (
    <div>
      {label &&
        <label htmlFor={inputId}>
          {label}
        </label>
      }
      <input id={inputId} {...otherProps} />
    </div>
  );
};