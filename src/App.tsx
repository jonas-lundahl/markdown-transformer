import { useEffect, useState } from "react";
import { ADFEditor } from "./ADFEditor.tsx";

function App() {
  const [markdownFile, setMarkdownFile] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/input.md");
        const text = await response.text();
        setMarkdownFile(text);
      } catch (error) {
        console.error("Error fetching file:", error);
      }
    };

    void fetchData();
  }, []);

  if (markdownFile == null) {
    return "Loading...";
  }

  return <ADFEditor initialMarkdown={markdownFile} />;
}

export default App;
