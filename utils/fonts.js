export const getTextAlign = (textAlign) => {
  const textAlignMap = {
    "left": "text-left",
    "right": "text-right",
    "center": "text-center",
  }

  return `${textAlignMap[textAlign] || ""}`
}

export const getFontSizeForHeading = (level) => {
  const fontSizeMap = {
    1: "text-6xl font-medium tracking-wider text-white",
    2: "text-5xl font-medium tracking-wider",
    3: "text-4xl font-medium tracking-wider",
    4: "text-3xl font-medium tracking-wider",
    5: "text-2xl font-medium tracking-wider",
    6: "text-1xl font-medium tracking-wider",
  }

  return `${fontSizeMap[level] || ""}`
}