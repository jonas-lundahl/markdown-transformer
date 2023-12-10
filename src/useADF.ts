import { MarkdownTransformer } from "@atlaskit/editor-markdown-transformer";
import { defaultSchema as schema } from "@atlaskit/adf-schema/schema-default";

export const useADF = (markdown: string) => {
  const transformer = new MarkdownTransformer(schema);
  return transformer.parse(markdown);
};
