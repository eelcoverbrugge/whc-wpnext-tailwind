import { theme } from "../../theme";
export const Column = ({ children, width, padding, border }) => {
  const widthStyle = width ? { minWidth: width, flexGrow: 1 } : { flexGrow: 1, flexBasis: 0 };

  const paddingStyle = padding ? {
    paddingTop: padding.top?.match(/\d/g).join("") + "px" || 0,
    paddingRight: padding.right?.match(/\d/g).join("") + "px" || 0,
    paddingBottom: padding.bottom?.match(/\d/g).join("") + "px" || 0,
    paddingLeft: padding.left?.match(/\d/g).join("") + "px" || 0,
  } : {};

  const borderStyle = border ? {
    borderTop: border.top?.width + " solid " + theme[border?.top?.color?.split('|')[2]] || 0,
    borderRight: border.right?.width + " solid " + theme[border?.right?.color?.split('|')[2]] || 0,
    borderBottom: border.bottom?.width + " solid " + theme[border?.bottom?.color?.split('|')[2]] || 0,
    borderLeft: border.left?.width + " solid " + theme[border?.left?.color?.split('|')[2]] || 0,
    } : {};

  return (
    <div style={{
      ...widthStyle,
      ...paddingStyle,
      ...borderStyle,
    }} className="px-2 py-5">
      {children}
    </div>
  );
};