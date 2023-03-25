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
    1: "text-6xl font-bold tracking-wider font-medium text-white",
    2: "text-5xl font-bold tracking-wider font-medium",
    3: "text-4xl font-bold tracking-wider font-medium",
    4: "text-3xl font-bold tracking-wider font-medium",
    5: "text-2xl font-bold tracking-wider font-medium",
    6: "text-1xl font-bold tracking-wider font-medium",
  }

  return `${fontSizeMap[level] || ""}`
}