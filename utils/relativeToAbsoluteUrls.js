export const relativeToAbsoluteUrls = (htmlString = "") => {
  const target = (process.env.NEXT_PUBLIC_WP_URL || "").replace(/\/$/, "");
  const httpVersion = target.replace(/^https/, "http");
  const httpsVersion = target.replace(/^http:/, "https:");

  return htmlString
    .split(httpVersion).join(target)
    .split(httpsVersion).join(target);
}