export const Video = ({ originalContent }) => {
  return (
    <div className={"video max-w-5xl mx-auto px-4"}
       dangerouslySetInnerHTML={{ __html: originalContent }} />
  );
};
