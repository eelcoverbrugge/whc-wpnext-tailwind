export const Column = ({ children, width, padding }) => {
  const widthStyle = width ? { minWidth: width, flexGrow: 1 } : { flexGrow: 1, flexBasis: 0 };
  const paddingStyle = padding ? {
    paddingTop: padding.top?.match(/\d/g).join("") + "px" || 0,
    paddingRight: padding.right?.match(/\d/g).join("") + "px" || 0,
    paddingBottom: padding.bottom?.match(/\d/g).join("") + "px" || 0,
    paddingLeft: padding.left?.match(/\d/g).join("") + "px" || 0,
  } : {};
  return (
    <div style={{
      ...widthStyle,
      ...paddingStyle,
    }} className="px-2 py-5">
      {children}
    </div>
  );
};