import { NodeViewContent, NodeViewWrapper } from "@tiptap/react";

const TitleNodeView = () => {
  return (
    <NodeViewWrapper>
      <div className="flex align-middle gap-3 w-[100%]">
        <div contentEditable={false} className="font-bold">
          Title
        </div>
        <NodeViewContent
          as={"span"}
          className="bg-gray-200 rounded-sm flex-grow"
        ></NodeViewContent>
      </div>
    </NodeViewWrapper>
  );
};

export default TitleNodeView;
