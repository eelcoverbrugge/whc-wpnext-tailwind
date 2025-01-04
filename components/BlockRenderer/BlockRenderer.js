import { FaFileDownload } from "react-icons/fa";
import { Cover } from "../Cover";
import { Heading } from "../Heading";
import { Paragraph } from "../Paragraph";
import { theme } from "../../theme";
import { CallToActionButton } from "../CallToActionButton";
import { Columns } from "../Columns";
import { Column } from "../Column";
import { Slider } from "../Slider";
import { AgendaItem } from "../AgendaItem";
import { PostTitle } from "../PostTitle";
import { Form } from "../Form";
import { PropertyFeatures } from "../PropertyFeatures";
import { Gallery } from "../Gallery";
import { TickItem } from "../TickItem";
import { Spacer } from "../Spacer";
import { Separator } from "../Separator";
import { Image } from "../Image";
import { Video } from "components/Video";

export const BlockRenderer = ({ blocks }) => {
  if (blocks && blocks.length > 0) {
    return blocks.map(block => {
      switch (block?.name) {
        case "acf/propertyfeatures": {
          return <PropertyFeatures key={block?.id}
          />;
        }
        case "acf/slider": {
          return <Slider key={block?.id}
                         images={block?.attributes?.data}
                         height={block?.attributes?.data?.height}
          />;
        }
        case "acf/tickitem": {
          return <TickItem key={block?.id}>
            <BlockRenderer
              blocks={block?.innerBlocks} />
          </TickItem>;
        }
        case "acf/formspreeform": {
          return <Form key={block?.id}
                       formId={block?.attributes?.data?.form_id}
          />;
        }
        case "acf/ctabutton": {
          return <CallToActionButton key={block?.id}
                                     buttonLabel={block?.attributes?.data?.label}
                                     destination={block?.attributes?.data?.destination || "/"}
                                     align={block?.attributes?.data?.align}
          />;
        }
        case "acf/agendaitemsfeatured": {
          return <AgendaItem key={block?.id}
                             size={3}
          />;
        }
        case "acf/agendaitems": {
          return <AgendaItem key={block?.id}
                             size={6}
          />;
        }
        case "core/paragraph": {
          return <Paragraph key={block?.id}
                            content={block?.attributes?.content}
                            textAlign={block?.attributes?.align}
                            textColor={theme[block?.attributes?.textColor] ||
                              block?.attributes?.style?.color?.text}
          />;
        }
        case "core/heading": {
          return <Heading key={block?.id}
                          level={block?.attributes?.level}
                          content={block?.attributes?.content}
                          textAlign={block?.attributes?.textAlign}
          />;
        }
        case "core/post-title": {
          return (
            <PostTitle key={block?.id}
                       level={block?.attributes?.level}
                       textAlign={block?.attributes?.textAlign}
            />
          );
        }
        case "core/gallery": {
          return <Gallery key={block?.id}
                          columns={block?.attributes?.columns || 3}
                          cropImages={block?.attributes?.imageCrop}
                          items={block?.innerBlocks}
          />;
        }
        case "core/cover": {
          return <Cover key={block?.id} background={block?.attributes?.url}><BlockRenderer
            blocks={block?.innerBlocks} /></Cover>;
        }
        case "core/columns": {
          return <Columns key={block?.id}
                          isStackedOnMobile={block?.attributes?.isStackedOnMobile}
                          textColor={
                            theme[block?.attributes?.textColor] ||
                            block?.attributes?.style?.color?.text
                          }
                          backgroundColor={
                            theme[block?.attributes?.backgroundColor] ||
                            block?.attributes?.style?.color?.background
                          }
          >
            <BlockRenderer blocks={block?.innerBlocks} />
          </Columns>;
        }
        case "core/column": {
          return (
            <Column key={block?.id}
                    width={block?.attributes?.width}
                    padding={block?.attributes?.style?.spacing?.padding}
                    border={block?.attributes?.style?.border}
            >
              <BlockRenderer blocks={block?.innerBlocks} />
            </Column>
          );
        }
        case "core/group":
        case "core/block": {
          return <BlockRenderer key={block?.id} blocks={block?.innerBlocks} />;
        }
        case "core/image": {
          return (
            <Image key={block?.id}
                   src={block?.attributes?.url}
                   height={block?.attributes?.height?.toString().replace(/[^0-9]/g, '')}
                   width={block?.attributes?.width?.toString().replace(/[^0-9]/g, '')}
                   alt={block?.attributes?.alt || ""}
                   fill={true}
                   priority={true}
                   link={block?.attributes?.href || ""}
            />
          );
        }
        case "core/spacer": {
          return (
            <Spacer key={block?.id}
                    height={block?.attributes?.height}
            />
          );
        }
        case "core/separator": {
          return (
            <Separator key={block?.id}
                       backgroundColor={block?.attributes?.backgroundColor}
            />
          );
        }
        case "core/file": {
          return (
            <div className="max-w-7xl mx-auto flex gap-2">
              <FaFileDownload/>
              <a key={block?.id}
                 href={block?.attributes?.href || ""}
                 target="_blank"
                 rel="noopener noreferrer">
                <button>{block?.attributes?.fileName}</button>
              </a>
            </div>
          );
        }
        // Video
        case "core/video": {
          // console.log("VIDEO: ", block);
          return (
            <Video key={block?.id}
              originalContent={block?.originalContent}
            />
          );
        }
        default: {
          console.log("UNKNOWN: ", block);
          return null;
        }
      }
    });
  }
};