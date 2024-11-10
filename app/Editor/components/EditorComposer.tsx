import React, { useContext } from "react";
import ToolBar from "./ToolBar";
import { EditorContent } from "@tiptap/react";
import EditorContext from "../context/EditorContext";
import CustomFloatingMenu from "./extensions/CustomFloatingMenu";

const EditorComposer = () => {
  const { editor } = useContext(EditorContext);
  return (
    <div className=" m-auto min-h-[100dvh] flex flex-col p-5">
      {/* <ToolBar /> */}
      <div className="w-full border flex-grow">
        <EditorContent
          id="editor"
          className="p-4 focus:outline-none min-h-[300px]"
          editor={editor}
        />
        {editor && <CustomFloatingMenu editor={editor} />}
      </div>
    </div>
  );
};

export default EditorComposer;
