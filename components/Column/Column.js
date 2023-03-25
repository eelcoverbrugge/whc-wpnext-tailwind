export const Column = ({ children, width, textColor, backgroundColor, padding, border }) => {
  const textColorStyle = textColor ? { color: textColor } : {};
  const backgroundColorStyle = backgroundColor ? { backgroundColor } : {};
  const widthStyle = width ? { minWidth: width, flexGrow: 1 } : { flexGrow: 1, flexBasis: 0 };

  console.log(padding)
  const paddingTop = padding?.top ? padding?.top.match(/\d/g).join("")/10 : ""; //40
  const paddingRight = padding?.right ? padding?.right.match(/\d/g).join("")/10 : ""; //40
  const paddingBottom = padding?.bottom ? padding?.bottom.match(/\d/g).join("")/10 : ""; //40
  const paddingLeft = padding?.left ? padding?.left.match(/\d/g).join("")/10 : ""; //40

  let paddingT = Number(paddingTop) ? `pt-${paddingTop}` : "";
  let paddingR = Number(paddingRight) ? `pr-${paddingRight}` : "";
  let paddingB = Number(paddingBottom) ? `pb-${paddingBottom}` : "";
  let paddingL = Number(paddingLeft) ? `pl-${paddingLeft}` : "";
  let paddingY = "";
  let paddingX = "";

  if (paddingTop && paddingTop === paddingBottom) {
    console.log(paddingTop)
    paddingT = "";
    paddingB = "";
    paddingY = `py-${paddingTop}`;
  }

  if (paddingLeft && paddingLeft === paddingRight) {
    paddingR = "";
    paddingL = "";
    paddingX = `px-${paddingLeft}`;
  }

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
      ...borderStyle
    }} className={`px-2 py-5 ${paddingT} ${paddingR} ${paddingB} ${paddingL} ${paddingY} ${paddingX}`}>
      {children}
    </div>
  );
};