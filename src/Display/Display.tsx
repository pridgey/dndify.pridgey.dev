import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

type DisplayProps = {
  Markdown: string;
};

export const Display = ({ Markdown }: DisplayProps) => (
  <div className="columns">
    <ReactMarkdown remarkPlugins={[gfm]}>{Markdown}</ReactMarkdown>
  </div>
);
