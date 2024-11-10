import { Node, mergeAttributes } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import CardNodeView from "./CardNode.view";

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    CardNode: {
      /**
       * create a card node
       */
      createCardNode: () => ReturnType;
    };
  }
}

const CardNode = Node.create({
  name: "cardNode",
  group: "block",
  content: "imageNode titleNode descriptionNode",
  isolating: true,
  parseHTML() {
    return [
      {
        tag: "cardNode",
      },
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ["div", mergeAttributes(HTMLAttributes), 0];
  },
  addCommands() {
    return {
      createCardNode:
        () =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            content: [
              { type: "imageNode" },
              { type: "titleNode" },
              { type: "descriptionNode" },
            ],
          });
        },
    };
  },
  addNodeView() {
    return ReactNodeViewRenderer(CardNodeView);
  },
});

export default CardNode;
