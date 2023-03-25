export const Column = ({ children, width, textColor, backgroundColor, padding, border }) => {
  const textColorStyle = textColor ? { color: textColor } : {};
  const backgroundColorStyle = backgroundColor ? { backgroundColor } : {};
  const widthStyle = width ? { minWidth: width, flexGrow: 1 } : { flexGrow: 1, flexBasis: 0 };
  const paddingStyle = padding ? {
    paddingTop: padding?.top ? padding?.top.match(/\d/g).join("") + "px" : "",
    paddingRight: padding?.right ? padding?.right.match(/\d/g).join("") + "px" : "",
    paddingBottom: padding?.bottom ? padding?.bottom.match(/\d/g).join("") + "px" : "",
    paddingLeft: padding?.left ? padding?.left.match(/\d/g).join("") + "px" : ""
  } : {};
  const borderStyle = border ? {
    borderTop: border?.top ? "1px solid #292238" : "",
    borderRight: border?.right ? "1px solid #292238" : "",
    borderBottom: border?.bottom ? "1px solid #292238" : "",
    borderLeft: border?.left ? "1px solid #292238" : "",
  } : {};

  return (
    <div style={{
      ...widthStyle,
      ...textColorStyle,
      ...backgroundColorStyle,
      ...paddingStyle,
      ...borderStyle
    }} className="px-2 py-5">
      {children}
    </div>
  );
};