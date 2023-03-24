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
    1: "text-6xl font-bold",
    2: "text-5xl font-bold",
    3: "text-4xl font-bold",
    4: "text-3xl font-bold",
    5: "text-2xl font-bold",
    6: "text-1xl font-bold",
  }

  return `${fontSizeMap[level] || ""}`
}