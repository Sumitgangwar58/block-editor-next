import { Node, mergeAttributes } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import DescriptionNodeView from "./DescriptionNode.view";

const DescriptionNode = Node.create({
  name: "descriptionNode",
  group: "block",
  content: "block*",
  isolating: true,

  parseHTML() {
    return [
      {
        tag: "descriptionNode",
      },
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ["p", mergeAttributes(HTMLAttributes)];
  },
  addNodeView() {
    return ReactNodeViewRenderer(DescriptionNodeView);
  },
});

export default DescriptionNode;
