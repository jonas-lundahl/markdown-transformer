import { FC, useState } from "react";
import { useADF } from "./useADF.ts";

export const ADFEditor: FC<{ initialMarkdown: string }> = ({
  initialMarkdown,
}) => {
  const [markdown, setMarkdown] = useState(initialMarkdown);
  const transformedMarkdown = useADF(markdown);
  return (
    <>
      <h1>Markdown to ADF</h1>
      <div style={{ display: "flex", gap: 8 }}>
        <textarea
          style={{ flex: 1, resize: "none", height: "75vh" }}
          value={markdown}
          onChange={(event) => setMarkdown(event.target.value)}
        />
        <textarea
          style={{ flex: 1, resize: "none", height: "75vh" }}
          disabled
          value={JSON.stringify(transformedMarkdown, null, 2)}
        />
      </div>
    </>
  );
};
