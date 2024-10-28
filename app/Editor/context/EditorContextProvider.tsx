import React from "react";
import EditorContext from "./EditorContext";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import { ImagePlugin } from "../components/plugins/ImagePlugin";
import { TextAlignPlugin } from "../components/plugins/TextAlignPlugin";

interface EditorContextProviderI {
  children: React.ReactNode;
}

const EditorContextProvider = ({ ...props }: EditorContextProviderI) => {
  const { children } = props;
  const editor = useEditor({
    extensions: [StarterKit, Underline, TextAlignPlugin, ImagePlugin],
    onDrop: function () {
      console.log("drop");
    },
    content: "<p>Hello World! 🌎️</p>",
    immediatelyRender: false,
  });

  return (
    <EditorContext.Provider
      value={{
        editor: editor,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export default EditorContextProvider;
