import { Node, mergeAttributes } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import TitleNodeView from "./TitleNode.view";

const TitleNode = Node.create({
  name: "titleNode",
  group: "block",
  content: "inline*",
  isolating: true,

  parseHTML() {
    return [
      {
        tag: "titleNode",
      },
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ["p", mergeAttributes(HTMLAttributes)];
  },
  addNodeView() {
    return ReactNodeViewRenderer(TitleNodeView);
  },
});

export default TitleNode;
