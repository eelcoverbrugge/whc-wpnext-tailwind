export const Columns = ({
                          isStackedOnMobile,
                          children,
                          textColor,
                          backgroundColor
                        }) => {
  const textColorStyle = textColor ? { color: textColor } : {};
  const backgroundColorStyle = backgroundColor ? { backgroundColor } : {};
  return (
    <div style={{ ...textColorStyle, ...backgroundColorStyle }}>
      <div className={`max-w-7xl mx-2 md:mx-4 lg:mx-auto  ${isStackedOnMobile ? "block md:flex" : "flex"}`}>
        {children}
      </div>
    </div>
  );
};