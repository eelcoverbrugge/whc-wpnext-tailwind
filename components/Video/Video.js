export const Video = ({ originalContent }) => {
  return (
    <div className={"video py-4"}
       dangerouslySetInnerHTML={{ __html: originalContent }} />
  );
};
