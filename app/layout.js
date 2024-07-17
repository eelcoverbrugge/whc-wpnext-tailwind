import PageWrapper from "../context/page";

export default function RootLayout({ children }) {
  return (
    <html lang={"nl"}>
      <body>
        <PageWrapper
          value={{
            propertyFeatures: props.propertyFeatures,
            title: props.title,
            featuredImage: props.featuredImage
          }}
        >
          {children}
        </PageWrapper>
      </body>
    </html>
  );
};
