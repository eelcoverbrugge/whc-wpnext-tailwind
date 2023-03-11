import { Cover } from "../Cover";
import { Heading } from "../Heading";
import { Paragraph } from "../Paragraph";
import { theme } from "../../theme";
import { CallToActionButton } from "../CallToActionButton";
import { Columns } from "../Columns";
import { Column } from "../Column";
import Image from 'next/image'

export const BlockRenderer = ({ blocks }) => {
  return blocks.map(block => {
    switch (block.name) {
      case "acf/ctabutton": {
        // console.log("BLOCK: ", block);
        return <CallToActionButton key={block.id}
                                   buttonLabel={block.attributes.data.label}
                                   destination={block.attributes.data.destination || "/"}
                                   align={block.attributes.data.align}
        />;
      }
      case "core/paragraph": {
        // console.log("BLOCK: ", block);
        return <Paragraph key={block.id}
                          content={block.attributes.content}
                          textAlign={block.attributes.align}
                          textColor={theme[block.attributes.textColor] ||
                            block.attributes.style?.color?.text}
        />;
      }
      case "core/heading": {
        // console.log("BLOCK: ", block);
        return <Heading key={block.id}
                        level={block.attributes.level}
                        content={block.attributes.content}
                        textAlign={block.attributes.textAlign}
        />;
      }
      case "core/cover": {
        // console.log("BLOCK: ", block);
        return <Cover key={block.id} background={block.attributes.url}><BlockRenderer
          blocks={block.innerBlocks} /></Cover>;
      }
      case "core/columns": {
        // console.log("BLOCK: ", block);
        return <Columns key={block.id}
                        isStackedOnMobile={block.attributes.isStackedOnMobile}
        >
          <BlockRenderer
            blocks={block.innerBlocks} />
        </Columns>;
      }
      case "core/column": {
        console.log("BLOCK: ", block);
        console.log("block.innerBlocks: ", block.innerBlocks);
        return (
          <Column key={block.id} width={block.attributes.width}>
            <BlockRenderer blocks={block.innerBlocks} />
          </Column>
        );
      }
      case "core/group":
      case "core/block": {
        return <BlockRenderer key={block.id} blocks={block.innerBlocks} />;
      }
      case "core/image": {
        return (
          <Image key={block.id}
                 src={block.attributes.url}
                 height={block.attributes.height}
                 width={block.attributes.width}
                 alt={block.attributes.alt || ""}
          />
        );
      }
      default: {
        // console.log("UNKNOWN", block);
        return null;
      }
    }
  });
};