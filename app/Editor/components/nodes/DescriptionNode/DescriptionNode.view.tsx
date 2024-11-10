import { NodeViewContent, NodeViewWrapper } from "@tiptap/react";
import React from "react";

const DescriptionNodeView = () => {
  return (
    <NodeViewWrapper>
      <div className="flex flex-col align-middle gap-3 w-[100%]">
        <div contentEditable={false} className="font-bold">
          Description
        </div>
      </div>
      <div className="min-h-40">
        <NodeViewContent className="bg-gray-200 min-h-[100px] rounded-sm" />
      </div>
    </NodeViewWrapper>
  );
};

export default DescriptionNodeView;
