export const relativeToAbsoluteUrls = (htmlString = "") => {
  return htmlString.split("https://academic-horse.flywheelstaging.com").join("")
}