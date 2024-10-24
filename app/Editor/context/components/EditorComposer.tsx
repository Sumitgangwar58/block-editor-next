import React, { useContext } from "react";
import ToolBar from "../../ToolBar";
import { EditorContent } from "@tiptap/react";
import EditorContext from "../EditorContext";

const EditorComposer = () => {
  const { editor } = useContext(EditorContext);
  return (
    <div className=" m-auto max-w-[600px] flex flex-col p-5">
      <ToolBar />
      <div className="w-full border ">
        <EditorContent
          className="p-4 focus:outline-none min-h-[300px]"
          editor={editor}
        />
      </div>
    </div>
  );
};

export default EditorComposer;
