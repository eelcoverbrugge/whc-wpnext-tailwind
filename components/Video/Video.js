export const Video = ({ originalContent }) => {
  return (
    <div className={"video"}
       dangerouslySetInnerHTML={{ __html: originalContent }} />
  );
};
